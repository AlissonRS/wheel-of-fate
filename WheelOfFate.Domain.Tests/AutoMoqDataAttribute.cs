using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoFixture.AutoMoq;
using AutoFixture.Xunit2;

namespace WheelOfFate.Domain.Tests
{
    public class AutoMoqDataAttribute : AutoDataAttribute
    {

        public AutoMoqDataAttribute() : base(() => new WheelOfFateFixture().Customize(new AutoMoqCustomization())) { }
    }

}
