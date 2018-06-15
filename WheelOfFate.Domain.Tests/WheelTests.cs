using Moq;
using System;
using System.Linq;
using System.Threading.Tasks;
using WheelOfFate.Domain.Entities;
using Xunit;

namespace WheelOfFate.Domain.Tests
{

    public class WheelTests
    {

        public const int ENGINEERS_COUNT = 10;

        [Theory(DisplayName = "ShouldRespectMaximumDailyShiftsPerEngineer")]
        [AutoMoqData]
        public async Task ShouldRespectMaximumDailyShiftsPerEngineer(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate, int randomNumberOfDays)
        {
            // arrange
            var sut = builder
                .WithEngineers(ENGINEERS_COUNT)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );

            // assert
            builder.NotifierService.Verify(
                n => n.MaximumDailyShiftsNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<int>()),
                Times.Never(),
                "We are not respecting maximum daily shifts. We should hire more engineers or reduce the number of shifts per day :)"
                );
        }

        [Theory(DisplayName = "ShouldNotifySomeoneWhenNotRespectingMaximumDailyShifts")]
        [AutoMoqData]
        public async Task ShouldNotifySomeoneWhenNotRespectingMaximumDailyShifts(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate, int randomNumberOfDays)
        {
            // arrange
            randomTeam.ShiftsPerDay = 5;
            var sut = builder
                .WithEngineers(2)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );

            // assert
            builder.NotifierService.Verify(
                n => n.MaximumDailyShiftsNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<int>()),
                Times.AtLeastOnce(),
                "Our engineers are working more than expected, but no one knows that because we are not telling anyone :("
                );
        }

        [Theory(DisplayName = "ShouldCreateTheExpectedAmountOfShifts")]
        [AutoMoqData]
        public async Task ShouldCreateTheExpectedAmountOfShifts(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate, int randomNumberOfDays)
        {
            // arrange
            var sut = builder
                .WithEngineers(ENGINEERS_COUNT)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );

            // assert
            int expectedShifts = randomTeam.ExpectedAmountOfShifts(
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );
            Assert.Equal(randomTeam.Shifts.Count, expectedShifts);
        }

        [Theory(DisplayName = "ShouldRespectMinimumRestDaysAfterSupporting")]
        [AutoMoqData]
        public async Task ShouldRespectMinimumRestDaysAfterSupporting(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate, int randomNumberOfDays)
        {
            // arrange
            var sut = builder
                .WithEngineers(ENGINEERS_COUNT)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );

            // assert
            builder.NotifierService.Verify(
                n => n.MinimumRestDaysNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<DateTime>()),
                Times.Never(),
                "We are not respecting minimum rest days. We should let our engineers rest appropriately :)"
                );
        }

        [Theory(DisplayName = "ShouldNotifySomeoneWhenNotRespectingMinimumRestDays")]
        [AutoMoqData]
        public async Task ShouldNotifySomeoneWhenNotRespectingMinimumRestDays(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate, int randomNumberOfDays)
        {
            // arrange
            var sut = builder
                .WithEngineers(2)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: randomNumberOfDays
                );

            // assert
            builder.NotifierService.Verify(
                n => n.MinimumRestDaysNotBeingRespected(It.IsAny<Engineer>(), It.IsAny<DateTime>(), It.IsAny<DateTime>()),
                Times.AtLeastOnce(),
                "Our engineers are not resting enough, but we are doing nothing for them :("
                );
        }

        [Theory(DisplayName = "EachEngineerShouldHaveCompletedOneWholeDayOfSupportIn2Weeks")]
        [AutoMoqData]
        public async Task EachEngineerShouldHaveCompletedOneWholeDayOfSupportIn2Weeks(Team randomTeam, WheelOfFateServiceBuilder builder, DateTime randomStartDate)
        {
            // arrange
            randomTeam.ShiftsPerDay = 2;
            var sut = builder
                .WithEngineers(10)
                .Build();

            // act
            await sut.ChooseEngineers(
                forTeam: randomTeam,
                startingIn: randomStartDate,
                howManyDays: 14
                );

            // assert
            var engineers = randomTeam.Shifts.Select(s => s.Engineer);
            Assert.DoesNotContain(engineers, e => e.Shifts.Count < 2);

        }

    }
}
