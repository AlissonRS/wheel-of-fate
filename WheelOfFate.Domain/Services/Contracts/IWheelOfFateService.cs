using System;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;

namespace WheelOfFate.Domain.Services.Contracts
{
    public interface IWheelOfFateService
    {
        Task ChooseEngineers(Team forTeam, DateTime startingIn, int howManyDays);
    }
}