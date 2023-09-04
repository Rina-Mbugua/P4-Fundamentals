const removeFromArray = function(arr, valueToRemove) {
    // Use the filter method to create a new array that excludes the value to remove.
    return arr.filter(item => item !== valueToRemove);
};

// Do not edit below this line
module.exports = removeFromArray;
