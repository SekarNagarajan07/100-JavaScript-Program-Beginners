//Write a function that takes an array of numbers as input and returns the average of those numbers.

function calculateAverage(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return 0; // Return 0 if the array is empty to avoid division by zero
  }

  // Calculate the sum of all numbers in the array
  var sum = numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  // Calculate the average
  var average = sum / numbers.length;

  return average;
}

// Example usage:
var numbers = [5, 10, 15, 20];
var average = calculateAverage(numbers);
console.log("Average:", average); // Output: Average: 12.5
