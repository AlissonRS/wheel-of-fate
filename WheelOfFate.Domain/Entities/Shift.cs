using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WheelOfFate.Domain.Entities
{
    public class Shift : BaseEntity
    {
        
        public DateTime Date { get; protected set; }

        public int Order { get; protected set; }

        public string TeamId { get; protected set; }

        public virtual Team Team { get; protected set; }

        public string EngineerId { get; protected set; }

        public virtual Engineer Engineer { get; protected set; }

        protected Shift() : base()
        {

        }

        public Shift(DateTime date, Engineer engineer, int order)
        {
            this.Date = date;
            this.Engineer = engineer;
            this.Order = order;
            engineer.Shifts.Add(this);
        }

        public override string ToString()
        {
            return string.Format("{0} at {1}", this.Engineer.Name, this.Date.ToShortDateString());
        }

    }
}
