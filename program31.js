//Write a function that takes a string as input and returns the number of words in that string.
function countWords(inputString) {
  // Remove leading and trailing whitespace
  inputString = inputString.trim();

  // Split the string into an array of words using whitespace as delimiter
  var words = inputString.split(/\s+/);

  // Return the number of words in the array
  return words.length;
}

// Example usage:
var input = "Hello,   this is a string with   multiple   words!";
var wordCount = countWords(input);
console.log("Number of words:", wordCount); // Output: Number of words: 7
