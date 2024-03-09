//Write a program that converts a binary number to a decimal number.

function binaryToDecimal(binary) {
  var decimal = 0;
  var power = binary.length - 1;
  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power--;
  }
  return decimal;
}

// Example usage:
var binaryNumber = "1010";
var decimalNumber = binaryToDecimal(binaryNumber);
console.log("Binary:", binaryNumber, "Decimal:", decimalNumber); // Output: Binary: 1010 Decimal: 10
