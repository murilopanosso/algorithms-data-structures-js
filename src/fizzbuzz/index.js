
const checkFizz = (currentNumber) => {
    if (currentNumber % 3 === 0) {
        console.log('fizz');
        return true
    }
    return false;
};

const checkBuzz = (currentNumber) => {
    if (currentNumber % 5 === 0) {
        console.log('buzz');
        return true
    }
    return false;
};

const checkFizzBuzz = (currentNumber) => {
    if (currentNumber % 5 === 0 && currentNumber % 3 === 0) {
        console.log('fizzbuzz');
        return true
    }
    return false;
};


const fizzBuzz = (n) => {
    for (let i = 1 ; i<= n ; i++) {
        if (!checkFizzBuzz(i)) {
            if (!checkFizz(i)) {
                if (!checkBuzz(i)) {
                    console.log(i);
                }
            }
        }
    }
}

module.exports = fizzBuzz;