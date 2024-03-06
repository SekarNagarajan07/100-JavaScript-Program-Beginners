//Write a program that calculates the area of a rectangle using length and width provided by the user.

// Prompt the user to enter the length and width
var length = parseFloat(prompt("Enter the length of the rectangle:"));
var width = parseFloat(prompt("Enter the width of the rectangle:"));

// Calculate the area
var area = length * width;

// Print the result
console.log(
  "The area of the rectangle with length " +
    length +
    " and width " +
    width +
    " is: " +
    area
);
