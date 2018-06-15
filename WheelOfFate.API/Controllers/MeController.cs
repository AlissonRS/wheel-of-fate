using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WheelOfFate.Domain.Repositories;

namespace WheelOfFate.API.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class MeController : ControllerBase
    {
        private readonly ITeamRepository teamRepository;

        public MeController(ITeamRepository teamRepository)
        {
            this.teamRepository = teamRepository;
        }

        [HttpGet]
        [Route("teams")]
        public async Task<IActionResult> GetTeams()
        {
            var userId = User.Identity.Name;
            var teams = await teamRepository.GetByUserId(userId);
            if (!teams.Any())
                return NotFound();
            return new ObjectResult(teams.Select(t => new
            {
                t.Id,
                t.Name
            }));
        }

    }
}