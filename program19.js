//Write a function that takes a number as input and returns true if it is a palindrome, otherwise false.

function isPalindrome(number) {
  // Convert the number to a string
  var str = number.toString();

  // Check if the string is the same forwards and backwards
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Example usage:
var num1 = 12321;
console.log(num1 + " is a palindrome:", isPalindrome(num1)); // Output: 12321 is a palindrome: true

var num2 = 12345;
console.log(num2 + " is a palindrome:", isPalindrome(num2)); // Output: 12345 is a palindrome: false
