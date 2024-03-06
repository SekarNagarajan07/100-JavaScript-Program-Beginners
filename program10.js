//Write a program that prints the Fibonacci sequence up to a certain number of terms specified by the user.

function fibonacci(numTerms) {
  var fibSequence = [0, 1];

  if (numTerms === 1) {
    return [0];
  } else if (numTerms === 2) {
    return fibSequence;
  } else {
    for (var i = 2; i < numTerms; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }
}

// Example usage:
var numTerms = parseInt(
  prompt("Enter the number of terms for Fibonacci sequence:")
);
var result = fibonacci(numTerms);
console.log("Fibonacci sequence up to " + numTerms + " terms:");
console.log(result.join(", "));
