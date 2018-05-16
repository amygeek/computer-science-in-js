class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
        this.max = Number.MIN_VALUE;
    }
    inOrder(root) {
        if (!root) {
            return;
        }
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder((root.right));
    }
    getMax() {
        return this.max;
    }

    /***************************************************************************
             10
            /  \
          2    10
        /  \     \
      20    1   -25
                /  \
               3   4
     For each node there can be four ways that the max path goes through the node:
     1. Node only
     2. Max path through Left Child + Node
     3. Max path through Right Child + Node
     4. Max path through Left Child + Node + Max path through Right Child
     * @param root
     * @returns {number}
     */
    getMaxSum(root) {
        if ( !root ) {
            return 0;
        }
        let left = this.getMaxSum(root.left);
        let right = this.getMaxSum(root.right);

        //get the max of root data, or root data plus max value of left or right child
        let rootMax = Math.max( root.data,  root.data + Math.max( left, right ) );

        let allPathMax = Math.max( rootMax, left + right + root.data );
        
        this.max = Math.max( allPathMax, this.max );

        return rootMax;
    }
}

let tree = new BinaryTree();

tree.root = new Node(10);
tree.root.left = new Node(2);
tree.root.right = new Node(10);
tree.root.left.left = new Node(20);
tree.root.left.right = new Node(1);
tree.root.right.right = new Node(-25);
tree.root.right.right.left = new Node(3);
tree.root.right.right.right = new Node(4);

//tree.inOrder(tree.root);

tree.getMaxSum(tree.root);
console.log(tree.getMax());