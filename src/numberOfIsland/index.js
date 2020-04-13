const numIslands = (grid=[]) => {
    if(!grid)return 0
    let islandCounter = 0
    for (i=0;i<grid.length;i++){
        for (j=0;j<grid[i].length;j++){
            islandCounter += dfs(grid, i, j);
        }
    }
    return islandCounter;
}


const dfs = (grid, i, j) => {
    if(i>=grid.length || i<0 || j>=grid[i].length || j<0 || grid[i][j] === '0'){
        return 0;
    }
    grid[i][j] = '0';
    dfs(grid, i-1, j)
    dfs(grid, i+1, j)
    dfs(grid, i, j-1)
    dfs(grid, i, j+1)
    return 1;
}