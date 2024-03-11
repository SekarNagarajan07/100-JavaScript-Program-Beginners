//Write a program that converts a decimal number to binary.

function decimalToBinary(decimal) {
  // Check if the input is not a number or is negative
  if (isNaN(decimal) || decimal < 0) {
    return "Invalid input";
  }

  // If the input is 0, return "0" (special case)
  if (decimal === 0) {
    return "0";
  }

  var binary = "";

  // Convert decimal to binary iteratively
  while (decimal > 0) {
    // Take the remainder when divided by 2
    var remainder = decimal % 2;

    // Prepend the remainder to the binary string
    binary = remainder + binary;

    // Divide the decimal number by 2
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

// Example usage:
var decimalNumber = 13;
var binaryNumber = decimalToBinary(decimalNumber);
console.log("Binary representation of", decimalNumber, "is", binaryNumber); // Output: Binary representation of 13 is 1101
