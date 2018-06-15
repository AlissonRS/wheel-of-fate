using AutoFixture;
using AutoFixture.Kernel;
using RandomNameGeneratorLibrary;
using System;
using WheelOfFate.Domain.Entities;

namespace WheelOfFate.Domain.Tests
{

    public class WheelOfFateFixture: Fixture
    {

        public WheelOfFateFixture()
        {
            this.Customizations.Add(new EngineerBuilder());
            this.Inject(new Team("IT")
            {
                MaximumDailyShiftsPerEngineer = 1,
                MinimumRestDaysAfterSupporting = 1,
                ShiftsPerDay = 2,
                SkipWeekends = true
            });
        }

    }
    
    public class EngineerBuilder : ISpecimenBuilder
    {
        private readonly PersonNameGenerator _personGenerator;

        public EngineerBuilder()
        {
            this._personGenerator = new PersonNameGenerator();
        }

        public object Create(object request, ISpecimenContext context)
        {
            var type = request as Type;

            if (type == null)
                return new NoSpecimen();

            if (type != typeof(Engineer))
                return new NoSpecimen();

            var name = this._personGenerator.GenerateRandomFirstAndLastName();
            return new Engineer(name);

        }
    }

}
