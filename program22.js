//Write a program that sorts an array of numbers in ascending order.

function sortAscending(numbers) {
  // Use the sort() method with a comparison function to sort numbers in ascending order
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}

// Example usage:
var numbers = [5, 2, 9, 1, 7];
var sortedNumbers = sortAscending(numbers);
console.log("Sorted numbers in ascending order:", sortedNumbers); // Output: Sorted numbers in ascending order: [1, 2, 5, 7, 9]
