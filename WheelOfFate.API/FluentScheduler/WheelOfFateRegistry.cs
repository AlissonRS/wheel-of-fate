using FluentScheduler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.API.FluentScheduler.Jobs;
using WheelOfFate.Domain.Services.Contracts;

namespace WheelOfFate.API.FluentScheduler
{
    public class WheelOfFateRegistry: Registry
    {

        public WheelOfFateRegistry(IServiceProvider applicationServices)
        {
            this.Schedule(new CreateShiftsJob(applicationServices)).NonReentrant().ToRunNow().AndEvery(12).Hours();
        }

    }
}
