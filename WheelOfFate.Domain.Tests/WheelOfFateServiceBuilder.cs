using AutoFixture;
using Moq;
using System;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Domain.Services;
using WheelOfFate.Domain.Services.Contracts;

namespace WheelOfFate.Domain.Tests
{
    public class WheelOfFateServiceBuilder
    {
        private readonly WheelOfFateFixture _fixture;
        public Mock<ITeamRepository> EngineerRepository { get; private set; }
        public Mock<INotifierService> NotifierService { get; private set; }
        private int _howManyEngineers;

        public WheelOfFateServiceBuilder(Mock<ITeamRepository> engineerRepository, Mock<INotifierService> notifierService, WheelOfFateFixture fixture)
        {
            this._fixture = fixture;
            this.EngineerRepository = engineerRepository;
            this.NotifierService = notifierService;
            this._howManyEngineers = 10;
        }

        public WheelOfFateServiceBuilder WithEngineers(int howMany)
        {
            this._howManyEngineers = howMany;
            return this;
        }

        public WheelOfFateService Build()
        {
            var engineers = this._fixture.CreateMany<Engineer>(this._howManyEngineers);

            this.EngineerRepository
                .Setup(er => er.GetAvailableEngineersWithLastShiftBeforeDate(It.IsAny<Team>(), It.IsAny<DateTime>()))
                .Returns(Task.FromResult(engineers));
            
            // we need to manually setup mock methods which return Task, if we want to support async calls...
            this.NotifierService
                .Setup(er => er.MaximumDailyShiftsNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<int>()))
                .Returns(Task.FromResult(default(object)));

            this.NotifierService
                .Setup(er => er.MinimumRestDaysNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<DateTime>()))
                .Returns(Task.FromResult(default(object)));

            return new WheelOfFateService(this.EngineerRepository.Object, this.NotifierService.Object);
        }

    }
}
