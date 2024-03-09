//Write a function that takes two strings as input and returns true if they are anagrams, otherwise false.

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase to ignore case and spaces
  var formattedStr1 = str1.replace(/\s+/g, "").toLowerCase();
  var formattedStr2 = str2.replace(/\s+/g, "").toLowerCase();

  // Check if the length of both strings are equal
  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  // Sort the characters of both strings and compare them
  var sortedStr1 = formattedStr1.split("").sort().join("");
  var sortedStr2 = formattedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Example usage:
var str1 = "listen";
var str2 = "silent";
console.log(
  "Are '" + str1 + "' and '" + str2 + "' anagrams? " + areAnagrams(str1, str2)
); // Output: Are 'listen' and 'silent' anagrams? true
