//Write a program that finds the longest word in a sentence provided by the user.

function findLongestWord(sentence) {
  // Split the sentence into an array of words
  var words = sentence.split(" ");

  // Initialize variables to keep track of the longest word and its length
  var longestWord = "";
  var maxLength = 0;

  // Iterate through each word in the array
  for (var i = 0; i < words.length; i++) {
    // Remove any non-alphabetic characters from the word
    var cleanWord = words[i].replace(/[^a-zA-Z]/g, "");

    // Check if the current word is longer than the longest word found so far
    if (cleanWord.length > maxLength) {
      maxLength = cleanWord.length;
      longestWord = cleanWord;
    }
  }

  return longestWord;
}

// Prompt the user to enter a sentence
var userInput = prompt("Enter a sentence:");

// Find the longest word in the sentence
var longestWord = findLongestWord(userInput);

// Print the result
console.log("The longest word in the sentence is: " + longestWord);
