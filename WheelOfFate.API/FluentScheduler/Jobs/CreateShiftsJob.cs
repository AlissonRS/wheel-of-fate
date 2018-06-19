using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.Data.Context;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Domain.Services.Contracts;

namespace WheelOfFate.API.FluentScheduler.Jobs
{
    public class CreateShiftsJob : AsyncJob
    {

        public CreateShiftsJob(IServiceProvider applicationServices) : base(applicationServices) { }
        
        protected async override Task ExecuteAsync(IServiceScope scope)
        {
            var wheelOfFateContext = scope.ServiceProvider.GetService<WheelOfFateContext>();
            var wheelOfFateService = scope.ServiceProvider.GetService<IWheelOfFateService>();
            var teamRepository = scope.ServiceProvider.GetService<ITeamRepository>();
            var config = scope.ServiceProvider.GetService<IConfiguration>();

            var daysToComputeShiftsAhead = config.GetSection("AppSettings").GetValue<int>("DaysToComputeShiftsAhead");
            
            var teams = await teamRepository.GetAll();

            foreach (var t in teams)
            {
                var lastShift = t.Shifts.Any() ? t.Shifts.Select(s => s.Date).Max() : DateTime.Today;
                if (DateTime.Today.AddDays(daysToComputeShiftsAhead) < lastShift)
                    continue;
                await wheelOfFateService.ChooseEngineers(t, lastShift, daysToComputeShiftsAhead);
            }
            await wheelOfFateContext.SaveChangesAsync();
        }

    }
}
