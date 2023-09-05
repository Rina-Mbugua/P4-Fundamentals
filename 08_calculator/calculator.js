const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // this is a callback function.
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator *  currentValue, 1);
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(number) {
	if (number < 0) {
    return "Factorial is undefined for negative numbers." 
  }
  if (number === 0 || number === 1) {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
