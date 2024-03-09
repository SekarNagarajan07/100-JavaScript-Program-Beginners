//Write a program that checks if a given number is prime or not.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
var num = 17;
if (isPrime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}
