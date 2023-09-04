const leapYears = function(year) {

    // Check if the year is divisible by 4.
    // If it is, it could be a leap year, but we need to check further.
    if (year % 4 === 0) {
        // If the year is divisible by 100, it's not a leap year,
        // unless it's also divisible by 400.
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true; // It's a leap year.
        }
    }

    return false; // It's not a leap year.
};


// Do not edit below this line
module.exports = leapYears;
