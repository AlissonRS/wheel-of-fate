using System;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;

namespace WheelOfFate.Domain.Services.Contracts
{
    public interface INotifierService
    {
        Task MinimumRestDaysNotBeingRespected(Engineer engineer, DateTime lastShift, DateTime attemptedShift);
        Task MaximumDailyShiftsNotBeingRespected(Engineer engineer, DateTime date, int numberOfShiftsAttempted);
    }
}
