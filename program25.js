//Write a function that takes a number as input and returns the factorial of that number.

function factorial(number) {
  // Check if the number is 0 or 1, factorial of 0 and 1 is 1
  if (number === 0 || number === 1) {
    return 1;
  }

  // Initialize the result variable to store the factorial
  var result = 1;

  // Calculate the factorial iteratively
  for (var i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

var num = 5;
var fact = factorial(num);
console.log("Factorial of", num, "is", fact); // Output: Factorial of 5 is 120
