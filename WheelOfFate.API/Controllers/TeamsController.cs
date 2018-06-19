using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WheelOfFate.API.Model.Teams;
using WheelOfFate.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace WheelOfFate.API.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TeamsController : ControllerBase
    {
        private readonly ITeamRepository teamRepository;

        public TeamsController(ITeamRepository teamRepository)
        {
            this.teamRepository = teamRepository;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var team = await teamRepository.GetTeamById(id);
            if (team == null)
                return NotFound();
            return new ObjectResult(team);
        }

        [HttpPost]
        [Route("shifts")]
        public async Task<IActionResult> GetShifts([FromBody]ShiftsByTeamRequest request)
        {
            var shifts = await teamRepository.GetShiftsAfterMonth(request.TeamId, request.Month, request.Year).Select(s => new
            {
                Engineer = s.Engineer.Name,
                Date = s.Date,
                Order = s.Order
            }).ToArrayAsync();
            if (shifts == null)
                return NotFound();
            return new ObjectResult(shifts);
        }

    }
}