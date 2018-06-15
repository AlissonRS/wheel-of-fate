using System;
using System.Linq;
using System.Collections.Generic;

namespace WheelOfFate.Domain.Extensions
{
    public static class DateTimeExtensions
    {

        private static readonly DayOfWeek[] Weekend = new DayOfWeek[] { DayOfWeek.Saturday, DayOfWeek.Sunday };

        public static IEnumerable<DateTime> EachDayTo(this DateTime from, DateTime thru, bool skipWeekends = false, bool skipFirstDay = true)
        {
            var startingIn = skipFirstDay ? from.Date.AddDays(1) : from.Date;
            for (var day = startingIn; day.Date <= thru.Date; day = day.AddDays(1))
            {
                if (skipWeekends && day.IsWeekend())
                    continue;
                yield return day;
            }
        }

        public static bool IsWeekend(this DateTime date)
        {
            return Weekend.Contains(date.DayOfWeek);
        }

    }
}
