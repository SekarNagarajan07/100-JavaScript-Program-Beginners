//Write a program that prints the first 100 prime numbers.

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

function printFirstNPrimes(n) {
  var primes = [];
  var num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}

// Example usage:
var first100Primes = printFirstNPrimes(100);
console.log("First 100 prime numbers:", first100Primes);
