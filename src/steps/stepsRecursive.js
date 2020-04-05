const stepRecursive = (n, row = 0, stair = '') => {
    if (n == row){
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return stepRecursive(n, row+1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    stepRecursive(n, row, stair);
}

module.exports = stepRecursive;
