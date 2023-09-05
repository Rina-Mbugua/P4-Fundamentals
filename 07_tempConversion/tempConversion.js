const convertToCelsius = function(fahrenheit) {
    const celsius = ((fahrenheit - 32) * (5/9)).toFixed(1);
    return parseFloat(celsius); // Convert the result back to a number (optional).
};


const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
