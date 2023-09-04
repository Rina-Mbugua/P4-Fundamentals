    const removeFromArray = function(arr, ...valuesToRemove) {

        // Use the filter method to create a new array that excludes the value to remove.
        return arr.filter(item => !valuesToRemove.includes(item));
    };

// Do not edit below this line
module.exports = removeFromArray;
