using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;

namespace WheelOfFate.Domain.Repositories
{
    public interface ITeamRepository
    {
        Task<IEnumerable<Team>> GetAll();
        Task<IEnumerable<Engineer>> GetAvailableEngineersWithLastShiftBeforeDate(Team team, DateTime start);
        Task<Team> GetTeamById(string id);
        Task<IEnumerable<Team>> GetByUserId(string authenticatedUserId);
        IQueryable<Shift> GetShiftsAfterMonth(string teamId, int month, int year);
    }
}
