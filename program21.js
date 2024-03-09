//Write a function that takes a string as input and returns the number of vowels in that string.

function countVowels(str) {
  // Define an array of vowels
  var vowels = ["a", "e", "i", "o", "u"];

  // Convert the string to lowercase to handle both lowercase and uppercase vowels
  str = str.toLowerCase();

  // Initialize a variable to count the number of vowels
  var vowelCount = 0;

  // Iterate through each character in the string
  for (var i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Example usage:
var inputString = "Hello, World!";
var vowelsCount = countVowels(inputString);
console.log("Number of vowels in '" + inputString + "':", vowelsCount); // Output: Number of vowels in 'Hello, World!': 3
