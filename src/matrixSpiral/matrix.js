const matrix2 = (inMatrix) => {
    let result = [];
    if (!inMatrix || !inMatrix[0]){
        return result;
    }
   let startRow = 0;
    let endRow = inMatrix.length - 1;
    let startColumn = 0;
    let endColumn = inMatrix[0].length - 1; 
    let size = inMatrix.length*inMatrix[0].length;
    while (result.length < size) {
        for (let i=startColumn; i <=endColumn && result.length < size; i++) {
            result.push(inMatrix[startRow][i]);
        }
        startRow++;

        for (let i=startRow; i<=endRow && result.length < size;i++) {
            result.push(inMatrix[i][endColumn]);
        }
        endColumn--;

        for (let i=endColumn; i>= startColumn && result.length < size; i--) {
            result.push(inMatrix[endRow][i]);
        }
        endRow--;

        for (let i=endRow; i>=startRow && result.length < size; i--){
            result.push(inMatrix[i][startColumn]);
        }
        startColumn++

    }

    return result;
}
const m = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12]]
console.log(matrix2(m))

module.exports = matrix2;