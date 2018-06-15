using System;
using System.Collections.Generic;

namespace WheelOfFate.Domain.Entities
{
    public class Engineer: BaseEntity
    {

        public string Name { get; protected set; }

        public string TeamId { get; protected set; }

        public virtual Team Team { get; protected set; }

        public virtual ICollection<Shift> Shifts { get; protected set; }

        protected Engineer(): base()
        {
            this.Shifts = new HashSet<Shift>();
        }

        public Engineer(string name) : this()
        {
            this.Name = name;
        }

        public override string ToString()
        {
            return string.Format("{0} [Shifts: {1}]", this.Name, this.Shifts.Count);
        }

    }
}
