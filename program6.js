//Write a program that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Example usage:
var celsiusTemperature = 25;
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(
  celsiusTemperature +
    " degrees Celsius is equal to " +
    fahrenheitTemperature +
    " degrees Fahrenheit."
);
