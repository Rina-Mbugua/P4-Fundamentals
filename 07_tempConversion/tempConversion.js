const convertToCelsius = function(fahrenheit) {
    const celsius = ((fahrenheit - 32) * (5/9).toFixed(1));
    return celsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
