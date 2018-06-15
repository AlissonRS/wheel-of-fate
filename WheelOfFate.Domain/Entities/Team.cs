using System;
using System.Collections.Generic;
using System.Linq;
using WheelOfFate.Domain.Extensions;

namespace WheelOfFate.Domain.Entities
{
    public class Team : BaseEntity
    {
        
        public string Name { get; protected set; }

        public int ShiftsPerDay { get; set; }

        public bool SkipWeekends { get; set; }

        public int MaximumDailyShiftsPerEngineer { get; set; }

        public int MinimumRestDaysAfterSupporting { get; set; }
        
        public ICollection<Engineer> Engineers { get; protected set; }

        public ICollection<Shift> Shifts { get; protected set; }

        public ICollection<UserTeam> Users { get; protected set; }

        protected Team() : base()
        {
            this.Engineers = new HashSet<Engineer>();
            this.Shifts = new HashSet<Shift>();
            this.Users = new HashSet<UserTeam>();
        }

        public Team(string name) : this()
        {
            this.Name = name;
        }

        public override string ToString()
        {
            return string.Format("{0} Team", this.Name);
        }

        public int ExpectedAmountOfShifts(DateTime startingIn, int howManyDays)
        {
            int expectedShifts = this.ShiftsPerDay * howManyDays;
            if (this.SkipWeekends)
            {
                int weekends = startingIn.EachDayTo(startingIn.AddDays(howManyDays)).Where(d => d.IsWeekend()).Count();
                int weekendShiftsToDisconsider = weekends * this.ShiftsPerDay;
                expectedShifts -= weekendShiftsToDisconsider;
            }
            return expectedShifts;
        }
    }
}
