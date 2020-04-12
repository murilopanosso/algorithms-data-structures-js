//104 leet code - accepted
const level3 = (root) => {
    const tree = [root, 's'];
    let depth = 0;
    while (tree.length > 1) {
        const node = tree.shift();
        if (node === 's') {
            depth++;
            tree.push('s');
        } else if (node) {
            tree.push(node.right);
            tree.push(node.left);
        }
    }
    return depth;
}