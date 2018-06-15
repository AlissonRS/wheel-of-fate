using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;
using WheelOfFate.Domain.Extensions;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Domain.Services.Contracts;

namespace WheelOfFate.Domain.Services
{

    public class WheelOfFateService : IWheelOfFateService
    {
        private readonly ITeamRepository engineerRepository;
        private readonly INotifierService notifierService;

        public WheelOfFateService(ITeamRepository engineerRepository, INotifierService notifierService)
        {
            this.engineerRepository = engineerRepository;
            this.notifierService = notifierService;
        }

        public async Task ChooseEngineers(Team forTeam, DateTime startingIn, int howManyDays)
        {
            IEnumerable<Engineer> availableEngineers = await this.engineerRepository.GetAvailableEngineersWithLastShiftBeforeDate(forTeam, startingIn).ConfigureAwait(false);

            foreach (DateTime date in startingIn.EachDayTo(startingIn.AddDays(howManyDays), forTeam.SkipWeekends))
                await AddShiftsForDate(forTeam, date, availableEngineers).ConfigureAwait(false);
        }

        private async Task AddShiftsForDate(Team team, DateTime date, IEnumerable<Engineer> engineers)
        {
            for (int i = 0; i < team.ShiftsPerDay; i++)
            {
                var engineer = ChooseNextEngineer(engineers);
                if (engineer == null)
                    throw new InvalidOperationException(string.Format("There is no more engineers available for {0} at {1}", team, date.ToShortDateString()));

                await CheckIfWeAreRespectingRestDays(engineer, date, team).ConfigureAwait(false);

                team.Shifts.Add(new Shift(date, engineer, i + 1));

                await CheckIfWeAreRespectingMaxDailyShifts(engineer, team).ConfigureAwait(false);

            }
        }

        private async Task CheckIfWeAreRespectingMaxDailyShifts(Engineer engineer, Team team)
        {
            foreach (var grp in engineer.Shifts.GroupBy(s => s.Date))
            {
                var shiftsInThisDate = grp.Count();
                if (shiftsInThisDate > team.MaximumDailyShiftsPerEngineer)
                    await this.notifierService.MaximumDailyShiftsNotBeingRespected(engineer, grp.Key, shiftsInThisDate).ConfigureAwait(false);
            }
        }

        private Engineer ChooseNextEngineer(IEnumerable<Engineer> engineers)
        {
            // should order by name if we hire two new engineers?
            var engineerWhoHasNeverGotShifts = engineers.Where(e => !e.Shifts.Any()).OrderBy(e => e.Name).FirstOrDefault();
            if (engineerWhoHasNeverGotShifts != null)
                return engineerWhoHasNeverGotShifts;
            return engineers
                .OrderBy(e => e.Shifts.Max(s => s.Date)) // order by shift date ascending
                .ThenBy(e => e.Shifts.Max(s => s.Order)) // order by shift order ascending
                .FirstOrDefault();
        }

        private async Task CheckIfWeAreRespectingRestDays(Engineer engineer, DateTime date, Team team)
        {
            var lastShiftBeforeDate = engineer.Shifts
                .Where(s => s.Date <= date)
                .OrderByDescending(s => s.Date)
                .FirstOrDefault();
            if (lastShiftBeforeDate == null)
                return;

            int restDays = (date - lastShiftBeforeDate.Date).Days;
            if (restDays > team.MinimumRestDaysAfterSupporting)
                return;

            // This may happen in real life, so instead of throwing an exception (because it's not),
            // we just notify someone (INotifierService is responsible for knowing who and how to notify)...
            await notifierService.MinimumRestDaysNotBeingRespected(engineer, lastShiftBeforeDate.Date, date).ConfigureAwait(false);
        }

    }

}
