//Write a function that takes an array of numbers as input and returns the sum of all the numbers.

function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];
var totalSum = sumArray(numbers);
console.log("The sum of the numbers is: " + totalSum); // Output: The sum of the numbers is: 15
