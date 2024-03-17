//Write a program that checks if a given number is a perfect number.

function isPerfectNumber(number) {
  if (number <= 1) {
    return false; // Perfect numbers are positive integers greater than 1
  }

  var sum = 1; // Start with 1 as it is a proper divisor for all numbers
  for (var i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      sum += i; // Add the divisor
      if (i * i !== number) {
        sum += number / i; // Add its pair if it's not a square number
      }
    }
  }

  return sum === number; // Check if the sum of proper divisors equals the number itself
}

// Example usage:
var number = 28;
if (isPerfectNumber(number)) {
  console.log(number + " is a perfect number.");
} else {
  console.log(number + " is not a perfect number.");
}
