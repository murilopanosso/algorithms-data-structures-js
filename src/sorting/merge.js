const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }
    const midPoint =  Math.floor(arr.length/2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left=[], right=[]) => {
    let results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = {merge, mergeSort};