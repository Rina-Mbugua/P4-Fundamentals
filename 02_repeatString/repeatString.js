const repeatString = function(str, num) {

    if (num < 0 || !Number.isInteger(num)) {
        return 'ERROR';
    }

    let result = '';

    for (let i = 0; i < num; i++) {
        result += str; // concatenate the string 'num' times
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
