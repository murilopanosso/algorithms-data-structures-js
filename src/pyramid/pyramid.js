const pyramid = (n) => {
    const midPointIndex = Math.floor((2*n-1)/2);
    for (let row = 0; row < n; row ++){
        let level = '';
        for (let column =0; column < n * 2 - 1; column++) {
            let start = midPointIndex - row;
            let end = midPointIndex + row;
            if (start <= column && end >= column){
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;

