//Write a program that prints the factorial of a number provided by the user.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Prompt the user to enter a number
var userInput = parseInt(prompt("Enter a number to calculate its factorial:"));

// Calculate the factorial
var result = factorial(userInput);

// Print the result
console.log("The factorial of " + userInput + " is: " + result);
