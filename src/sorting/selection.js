const selection = (arr = []) => {
    for (i=0;i<arr.length;i++) {
        let indexofMin = i;
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j] < arr[indexofMin]) {
                indexofMin = j;
            }
        }
        if (indexofMin !== i) {
            let temp = arr[i];
            arr[i] = arr[indexofMin];
            arr[indexofMin] = temp;
        }
    }
    return arr;
}


module.exports = selection;