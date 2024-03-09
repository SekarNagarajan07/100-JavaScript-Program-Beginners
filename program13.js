//Write a function that takes an array of numbers as input and returns the largest number in the array.

function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return undefined; // If the array is empty, return undefined
  }
  var largestNumber = numbers[0]; // Initialize largestNumber with the first element of the array
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

// Example usage:
var numbers = [5, 2, 9, 10, 1];
var largest = findLargestNumber(numbers);
console.log("The largest number in the array is: " + largest); // Output: The largest number in the array is: 10
