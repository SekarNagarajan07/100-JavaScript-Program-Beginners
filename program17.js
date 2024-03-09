//Write a function that takes an array of numbers as input and returns a new array with only the unique numbers.

function uniqueNumbers(numbers) {
  var uniqueArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (uniqueArray.indexOf(numbers[i]) === -1) {
      uniqueArray.push(numbers[i]);
    }
  }
  return uniqueArray;
}

// Example usage:
var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5];
var unique = uniqueNumbers(numbers);
console.log("Unique numbers in the array:", unique); // Output: Unique numbers in the array: [1, 2, 3, 4, 5, 6, 7]
