//Write a program that checks if a given string is a palindrome.

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string
  var reversedStr = cleanStr.split("").reverse().join("");

  // Check if the original string is equal to the reversed string
  return cleanStr === reversedStr;
}

// Example usage:
var inputString = "A man, a plan, a canal, Panama";
console.log("Is it a palindrome?", isPalindrome(inputString)); // Output: true
