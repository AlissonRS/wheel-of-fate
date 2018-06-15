using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace WheelOfFate.Data.Repositories
{
    public class TeamRepository : ITeamRepository
    {

        private readonly WheelOfFateContext context;

        public TeamRepository(WheelOfFateContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Team>> GetAll()
        {
            return await context.Teams
                   .Include("Shifts")
                   .ToArrayAsync();
        }

        public async Task<IEnumerable<Engineer>> GetAvailableEngineersWithLastShiftBeforeDate(Team team, DateTime start)
        {
            return await context.Engineers
                .Where(e => e.TeamId == team.Id)
                .Where(e => !e.Shifts.Any() || e.Shifts.Select(s => s.Date).Max() < start)
                .ToArrayAsync();
        }

        public async Task<IEnumerable<Team>> GetByUserId(string authenticatedUserId)
        {
            return await context.Teams
                .Where(t => t.Users.Any(u => u.User.Id == authenticatedUserId))
                .ToArrayAsync();
        }

        public IQueryable<Shift> GetShiftsAfterMonth(string teamId, int month, int year)
        {
            return context.Shifts
                .Where(s => s.TeamId == teamId && s.Date.Year == year && s.Date.Month >= month)
                .AsQueryable();
        }

        public async Task<Team> GetTeamById(string id)
        {
            return await context.Teams.FirstOrDefaultAsync(t => t.Id == id);
        }
    }
}
