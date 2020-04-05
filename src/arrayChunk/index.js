const chunkArray = (numbers, size) => {
    let chunked = [];
    for (number of numbers) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size){
            chunked.push([number]);
        } else {
            last.push(number);
        }
    }
    return chunked;
}


module.exports = chunkArray;

// const chunckSlice = (arr, size) => {
//     const chunked = [];
//     let index = 0;
//     while (index < arr.length) {
//         chunked.push(arr.slice(index, index+size));
//         index += size; 
//     }
//     return chunked;
// }