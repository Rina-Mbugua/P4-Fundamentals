const fibonacci = function(n) {
    const fibonacciSequence = [0, 1]; //start with the first two numbers of the sequence 

    for (let i = 2; i < n ; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence
};

// Do not edit below this line
module.exports = fibonacci;
