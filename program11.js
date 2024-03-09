//Write a function that takes a string as input and returns the reverse of that string.

function reverseString(inputString) {
  var reversedString = "";
  for (var i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// Example usage:
var input = "Hello, World!";
var reversed = reverseString(input);
console.log("Reversed string: " + reversed); // Output: "!dlroW ,olleH"
