const convertToCelsius = function(fahrenheit) {
    const celsius = ((fahrenheit - 32) * (5/9)).toFixed(1);
    return parseFloat(celsius); // Convert the result back to a number (optional).
};


const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = ((tempInCelsius * (9/5))+32).toFixed(1); //we have flipped the fraction and added 32
  return parseFloat(tempInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
