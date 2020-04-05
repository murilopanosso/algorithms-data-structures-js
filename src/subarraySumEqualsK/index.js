//accepted on leetcode
const subArrSum = (arrNum = [], k) => {
    let sum = 0
    let map = new Map();
    map.set(0, 1);
    let result = 0;
    for (n of arrNum) {
        sum += n;
        if (map.has(sum-k)) {
            result += map.get(sum-k);
        }
        map.set(sum, map.get(sum) + 1 || 1 );
    }
    return result;
} 

module.exports = subArrSum;