using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using WheelOfFate.API.Config.Security;
using WheelOfFate.API.Model.Login;
using WheelOfFate.Data.Context;
using WheelOfFate.Data.IdentityModels;

namespace WheelOfFate.API.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly Data.Context.WheelOfFateContext wheelOfFateContext;
        private readonly TokenConfigurations tokenConfigurations;
        private readonly SigningConfigurations signingConfigurations;

        public LoginController(
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager,
            WheelOfFateContext wheelOfFateContext,
            TokenConfigurations tokenConfigurations,
            SigningConfigurations signingConfigurations)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.wheelOfFateContext = wheelOfFateContext;
            this.tokenConfigurations = tokenConfigurations;
            this.signingConfigurations = signingConfigurations;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]LoginUserRequest userLogin)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = await wheelOfFateContext.Users
                .Include("User")
                .Where(u => u.UserName == userLogin.UserName || u.Email == userLogin.UserName)
                .FirstOrDefaultAsync();
            if (user == null)
                return BadRequest();

            var result = await signInManager.CheckPasswordSignInAsync(user, userLogin.Password, false);

            if (!result.Succeeded)
                return BadRequest();
            
            ClaimsIdentity identity = new ClaimsIdentity(
                    new GenericIdentity(user.Id, "Login"),
                    new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                    }
                );

            var createdAt = DateTime.Now;
            var expiresAt = createdAt + TimeSpan.FromSeconds(tokenConfigurations.Seconds);

            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = tokenConfigurations.Issuer,
                Audience = tokenConfigurations.Audience,
                SigningCredentials = signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = createdAt,
                Expires = expiresAt
            });
            var token = handler.WriteToken(securityToken);

            return new OkObjectResult(new
            {
                authenticated = true,
                created = createdAt.ToString("yyyy-MM-dd HH:mm:ss"),
                expiration = expiresAt.ToString("yyyy-MM-dd HH:mm:ss"),
                userLogin = user.UserName,
                userName = user.User.Name,
                userId = user.Id,
                accessToken = token,
                message = "OK"
            });
        }

    }
}