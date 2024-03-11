//Write a function that takes a string as input and returns true if it contains only digits, otherwise false.

function containsOnlyDigits(str) {
  // Regular expression to match only digits
  var digitRegex = /^\d+$/;

  // Test if the string matches the digit regex
  return digitRegex.test(str);
}

// Example usage:
var input1 = "12345";
console.log(input1 + " contains only digits:", containsOnlyDigits(input1)); // Output: true

var input2 = "123abc";
console.log(input2 + " contains only digits:", containsOnlyDigits(input2)); // Output: false
