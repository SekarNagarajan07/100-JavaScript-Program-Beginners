//Write a program that prints the sum of all numbers from 1 to 1000.

function sumFrom1To1000() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    sum += i;
  }
  return sum;
}

// Calculate and print the sum
var totalSum = sumFrom1To1000();
console.log("The sum of all numbers from 1 to 1000 is:", totalSum);
