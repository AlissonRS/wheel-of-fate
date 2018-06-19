using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.Data.IdentityModels;
using Microsoft.Extensions.DependencyInjection;
using WheelOfFate.Data.Context;
using Microsoft.EntityFrameworkCore;
using WheelOfFate.Domain.Entities;
using RandomNameGeneratorLibrary;

namespace WheelOfFate.API.Config
{
    public class SeedDatabase
    {

        private const int HOW_MANY_ENGINEERS = 10;

        public static async Task Seed(IServiceProvider serviceProvider)
        {
            var scopeFactory = serviceProvider.GetRequiredService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var db = scope.ServiceProvider.GetService<WheelOfFateContext>();
                var userManager = scope.ServiceProvider.GetService<UserManager<ApplicationUser>>();
                var appUser = await userManager.FindByNameAsync("Admin");
                if (appUser == null)
                {
                    var result = await userManager.CreateAsync(new ApplicationUser
                    {
                        UserName = "Admin",
                        Email = "admin@swof.com",
                        EmailConfirmed = true,
                        User = new User("Admin")
                    }, "#Adm1n");

                    if (!result.Succeeded)
                        throw new InvalidOperationException("It wasn't possible to create Admin User :(");

                    appUser = db.Users
                        .Include(c => c.User.Teams)
                        .Where(u => u.UserName == "Admin").FirstOrDefault();

                    var team = new Team("IT")
                    {
                        MaximumDailyShiftsPerEngineer = 1,
                        MinimumRestDaysAfterSupporting = 1,
                        ShiftsPerDay = 2,
                        SkipWeekends = true
                    };
                    var userTeam = new UserTeam { Team = team };
                    appUser.User.Teams.Add(userTeam);

                    var personGenerator = new PersonNameGenerator();
                    for (int i = 0; i < HOW_MANY_ENGINEERS; i++)
                    {
                        var name = personGenerator.GenerateRandomFirstAndLastName();
                        team.Engineers.Add(new Engineer(name));
                    }

                    await db.SaveChangesAsync();

                }
            }

        }

    }
}
