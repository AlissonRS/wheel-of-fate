using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;
using WheelOfFate.Domain.Services.Contracts;

namespace WheelOfFate.Messaging.Services
{
    public class SignalRNotifierService : INotifierService
    {
        public async Task MaximumDailyShiftsNotBeingRespected(Engineer engineer, DateTime date, int numberOfShiftsAttempted)
        {
            // should notify through SignalR
        }

        public async Task MinimumRestDaysNotBeingRespected(Engineer engineer, DateTime lastShift, DateTime attemptedShift)
        {
            // should notify through SignalR
        }
    }
}
