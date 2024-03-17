//Write a program that prints all Armstrong numbers between 1 and 1000.

function isArmstrongNumber(number) {
  var numString = number.toString();
  var numDigits = numString.length;
  var sum = 0;

  for (var i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(numString[i]), numDigits);
  }

  return sum === number;
}

function printArmstrongNumbers() {
  for (var i = 1; i <= 1000; i++) {
    if (isArmstrongNumber(i)) {
      console.log(i);
    }
  }
}

// Print Armstrong numbers between 1 and 1000
console.log("Armstrong numbers between 1 and 1000:");
printArmstrongNumbers();
