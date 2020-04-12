const levelWidth = (root) => {
    const tree = [root, 's'];
    const widths = [0];
    while (tree.length > 1) {
        const node = tree.shift();
        if (node === 's'){
            widths.push(0);
            tree.push('s');
        } else {
            tree.push(...node.children);
            widths[widths.length-1]++;
        }
    }

    return widths;
}

module.exports = levelWidth;