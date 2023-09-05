const palindromes = function (str) {
    //remove spaces and convert to lower case
    const cleanStr = str.replace(/\s/g, '').toLowerCase();

    //reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');

    //compare the original and reversed strings
    return cleanStr === reversedStr
};

// Do not edit below this line
module.exports = palindromes;
