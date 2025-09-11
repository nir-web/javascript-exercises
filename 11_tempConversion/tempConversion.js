const convertToCelsius = function(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) * (5/9);
  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  const tempFahreheit = ((9/5) * tempCelsius) + 32;
  return Math.round(tempFahreheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
