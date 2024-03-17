//Write a function that takes a string as input and returns true if it is a pangram, otherwise false.

function isPangram(sentence) {
  // Convert the sentence to lowercase to ignore case
  sentence = sentence.toLowerCase();

  // Create an object to store the frequency of each letter
  var letterFrequency = {};

  // Iterate through each character in the sentence
  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];

    // Ignore non-alphabetic characters
    if (/[a-z]/.test(char)) {
      // Increment the frequency of the current letter
      letterFrequency[char] = (letterFrequency[char] || 0) + 1;
    }
  }

  // Check if all the letters of the alphabet are present in the sentence
  return Object.keys(letterFrequency).length === 26;
}

// Example usage:
var inputSentence = "The quick brown fox jumps over the lazy dog";
console.log("Is it a pangram?", isPangram(inputSentence)); // Output: true
