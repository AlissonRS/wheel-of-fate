namespace WheelOfFate.Domain.Entities
{
    public class UserTeam: BaseEntity
    {

        public virtual User User { get; set; }

        public virtual Team Team { get; set; }

    }
}