const pyramidRecursive = (n, row = 0, stair = '') => {
    if(n === row) {
        return;
    }
    if (stair.length === 2 * n - 1) {
        console.log(stair);
        return pyramidRecursive(n, row+1);
    }
    const midPointIndex = Math.floor((n*2-1)/2);
    let add;
    if (midPointIndex-row <= stair.length && midPointIndex+row >= stair.length){
        add = '#';        
    }else {
        add = ' ';
    }
    pyramidRecursive(n, row, stair+add);
}

module.exports = pyramidRecursive;