//Write a program that prints the first n Fibonacci numbers.

function printFibonacci(n) {
  // Initialize variables to store the Fibonacci sequence
  var fibSequence = [0, 1];

  // If n is 1, return the first Fibonacci number
  if (n === 1) {
    console.log(fibSequence[0]);
    return;
  }

  // If n is 2, return the first two Fibonacci numbers
  if (n === 2) {
    console.log(fibSequence[0]);
    console.log(fibSequence[1]);
    return;
  }

  // Calculate and print the remaining Fibonacci numbers
  for (var i = 2; i < n; i++) {
    var nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextFib);
  }

  // Print the Fibonacci sequence
  for (var j = 0; j < n; j++) {
    console.log(fibSequence[j]);
  }
}

// Example usage:
var n = 10; // Change this value to print a different number of Fibonacci numbers
printFibonacci(n);
