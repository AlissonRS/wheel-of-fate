using System.Collections.Generic;

namespace WheelOfFate.Domain.Entities
{
    public class User: BaseEntity
    {

        public string Name { get; protected set; }

        public virtual ICollection<UserTeam> Teams { get; set; }

        protected User(): base()
        {
            this.Teams = new HashSet<UserTeam>();
        }

        public User(string name): this()
        {
            this.Name = name;
        }


    }
}
