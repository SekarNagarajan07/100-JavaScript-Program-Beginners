//Write a function that takes an array of numbers as input and returns the sum of the squares of those numbers.

function sumOfSquares(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i]; // Add the square of each number to the sum
  }
  return sum;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];
var result = sumOfSquares(numbers);
console.log("Sum of squares:", result); // Output: Sum of squares: 55
