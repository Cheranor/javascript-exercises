function roundTo1Decimal(toRound) {
  return (Math.round(toRound * 10) / 10)
}

const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  celsius = roundTo1Decimal(celsius);
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  fahrenheit = roundTo1Decimal(fahrenheit);
  return (fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
