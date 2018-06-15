using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using WheelOfFate.Domain.Entities;

namespace WheelOfFate.Data.IdentityModels
{
    public class ApplicationUser: IdentityUser
    {

        public virtual User User { get; set; }

    }
}
