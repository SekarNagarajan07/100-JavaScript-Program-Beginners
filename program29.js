//Write a function that takes an array of strings as input and returns the longest string.

function longestString(strings) {
  // Initialize variable to store the longest string
  var longest = "";

  // Iterate through each string in the array
  for (var i = 0; i < strings.length; i++) {
    // Update longest if the current string is longer
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }

  return longest;
}

// Example usage:
var strings = ["apple", "banana", "orange", "kiwi", "strawberry"];
var longest = longestString(strings);
console.log("Longest string:", longest); // Output: Longest string: strawberry
