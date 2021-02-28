/**
 * note: problem statement restricts to dates between 1971 and 2100
 * https://leetcode.com/problems/day-of-the-week/
 */

console.log(dayOfTheWeek(31, 8, 2019) === "Saturday");
console.log(dayOfTheWeek(18, 7, 1999) === "Sunday");
console.log(dayOfTheWeek(15, 8, 1993) === "Sunday");

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
function dayOfTheWeek(day, month, year) {
  // 1 1 1971 -> 'Friday'
  // naive idea: simply loop starting at 1 1 1971 and check the day
  let d = 1;
  let m = 1;
  let y = 1971;
  let dayOfWeek = 5; // 'Friday' (index starting at 0)
  let dayCount = 0;
  while (y < year) {
    dayCount += isLeapYear(y) ? 366 : 365;
    y++;
  }
  const daysInEachMonthThisYear = getDaysInEachMonth(y);
  while (m < month) {
    dayCount += daysInEachMonthThisYear[m];
    m++;
  }
  while (d < day) {
    dayCount++;
    d++;
  }
  const indexOfDayOfWeek = (dayOfWeek + dayCount) % 7;
  const dayOfWeekString = getDayOfWeek(indexOfDayOfWeek);
  return dayOfWeekString;
}

function getDayOfWeek(indexStartingAt0) {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][indexStartingAt0];
}

function getDaysInEachMonth(year) {
  return {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
}

function isLeapYear(y) {
  // https://en.wikipedia.org/wiki/Leap_year#Algorithm
  if (y % 4 !== 0) {
    return false;
  } else if (y % 100 !== 0) {
    return true;
  } else if (y % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
