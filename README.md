# The Support Wheel of Fate

The Support Wheel of Fate is a software which automatically designates members in a team to support the business.

In short, it was developed with C# .NET Core and Angular 6.

## Background

At one of our companies, all engineers take it in turns to support the business for half a day at a time. This is affectionately known as BAU. The software should select two engineers at random to both complete a half day of support each.

## Proposed Solution

In short, we have three entities:

- Team
- Engineer
- Shift

An Engineer belongs to one Team and may have many shifts.

In the team, you may configure how many shifts it should have per day, whether it should work on weekends, how many shifts each engineer may take in the same day and how many days an engineer should wait until been eligible for another shift.

This allows the team manager (or the person which is going to manage the team's shifts) to configure how they would like the shifts to be arranged. This makes it flexible, the software is able to figure out the best way to pick engineers for the expected shifts in a well distributed way.

This is a solution just to start the project, but new features could be added, like:
- Allowing an engineer to work in different teams
- Allowing engineers to take vacations
- Changing the distribution to make specific engineers to take more shifts
- Selecting hour start/end for each shift (e.g first shift is from 8 pm to 12pm and second shift is from 2pm to 6pm)

...these are just ideas which could be brainstormed.