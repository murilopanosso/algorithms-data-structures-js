const orangesRotting = (grid) => {
    let fresh = 1;
    let rotten = 2;
    let freshSet = new Set();
    let rottenSet = new Set();
    for (let i=0; i<grid.length; i++){
        for (let k=0; j<grid[0].length; j++){
            if (grid[i][j] === rotten) {
                rottenSet.add(''+i+j);
            }
            if (grid[i][j] === fresh) {
                freshSet.add(''+i+j);
            }
        }
    }
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let minutes = 0;
    while (freshSet.size > 0) {
        let infectedSet = new Set();
        rottenSet.forEach((val) => {
            let pos = val.split('');
            let i =  parseint(pos[0]);
            let j =  parseint(pos[1]);
            for (direction of directions) {
                let dic = direction.split('');
                let nextI =  dic[0] + i;
                let nextJ =  dic[1] + j;
                if (freshSet.has(nextI+nextJ)) {
                    freshSet.delete(nextI+nextJ);
                    infectedSet.add(nextI+nextJ);
                }
            }
        })
        if(infectedSet.size === 0) {
            return -1
        }
        rottenSet = infectedSet;
        minutes++;
    }

    return minutes;
    
}