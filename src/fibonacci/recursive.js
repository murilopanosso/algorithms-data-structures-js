const memoize = require('../memoize');

const fib = (n) => {
    if (n < 2) {
        return n;
    }

    return fibRec(n-1) + fibRec(n-2);
}

const fibRec = memoize(fib);

module.exports = fibRec;