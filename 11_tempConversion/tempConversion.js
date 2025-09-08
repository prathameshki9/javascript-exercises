const convertToCelsius = function(fahrenheit) {
  let temprature = (fahrenheit - 32) * (5/9) * 10;
  return Math.round(temprature)/10;
};

const convertToFahrenheit = function(celsius) {
  let temprature = ((celsius * (9)) /5 + 32) * 10;
  return Math.round(temprature)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
