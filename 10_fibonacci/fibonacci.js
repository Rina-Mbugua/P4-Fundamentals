const fibonacci = function(n) {
   
    if (n < 0) return "OOPS"
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
