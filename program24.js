//Write a program that checks if a given year is a leap year.

function isLeapYear(year) {
  // A leap year is divisible by 4, except for years divisible by 100
  // However, years divisible by 400 are also leap years
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

var year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
