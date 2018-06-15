using System;
using System.Collections.Generic;
using System.Text;

namespace WheelOfFate.Domain.Entities
{
    public class BaseEntity
    {

        public string Id { get; protected set; }

        public DateTime CreatedAt { get; protected set; }

        public DateTime? ModifiedAt { get; protected set; }

        public string CreatedBy { get; protected set; }

        public string ModifiedBy { get; protected set; }

        public BaseEntity()
        {
            this.Id = Guid.NewGuid().ToString();
        }

    }
}
