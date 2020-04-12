//662 from leet code - accepted
const levelWidth2 = (root) => {
    if(!root)return;
    root.val = 0;
    const tree = [root, 's'];
    let elements = [];
    let map = {};
    let depth = 0;
    let max = 0;
    while (tree.length > 1) {
        const node = tree.shift();
        if (node === 's') {
            tree.push('s');
            map[depth] = elements;
            depth++;
            if (elements.length > 1) {
                max = Math.max(parseInt(max), parseInt(getDiff(elements[elements.length-1], elements[0])));
            } else {
                max = Math.max(parseInt(max), 1);
            }
            elements =[];
        } else {
            if (node && node.left) {
                node.left.val = node.val * 2;
             
            }
                
            if (node && node.right) {
                node.right.val = node.val * 2 + 1;
                
            }
            if(node){
                tree.push(node.right);
                tree.push(node.left);
                elements.unshift(node.val);
            }
        }
    }
    return max;
}

const getDiff = (f, s) => {
    if (typeof s === 'number' && typeof s === 'number') {
        return (parseInt(f) - parseInt(s)) + 1;
    }
    return 0
}



class TreeNode {
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

let node = new TreeNode(1)
node.left = new TreeNode(3)
node.right = new TreeNode(2)

node.right.right = new TreeNode(9)

node.left.left = new TreeNode(5)
node.left.right = new TreeNode(3)



console.log(levelWidth2(node));