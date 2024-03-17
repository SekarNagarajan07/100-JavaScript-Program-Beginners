//Write a function that takes an array of numbers as input and returns the product of those numbers.

function getProduct(numbers) {
  // Initialize the product to 1
  var product = 1;

  // Iterate through each number in the array and multiply it with the product
  for (var i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  return product;
}

// Example usage:
var numbers = [2, 3, 4, 5];
var result = getProduct(numbers);
console.log("Product:", result); // Output: Product: 120
