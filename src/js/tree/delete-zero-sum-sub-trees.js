/**
 * Given root of a binary tree, delete any subtrees whose nodes sum up to zero. In the below binary tree,
 * we need to delete the subtree starting at node 5 as it's sum (5 -3 -2) equals zero.
        7
      /   \
     5     6
   /  \
 -3  -2
 This is what the binary tree will look like after deleting the zero sum subtree
 7
 \
 6

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(h).
 We will do a post order traversal of the binary tree.
 * @param root
 * @returns {*}
 */
let delete_zero_sum_subtree_rec = function(root) {

    if (!root) {
        return 0;
    }

    let sumLeft = delete_zero_sum_subtree_rec(root.left);
    if ( sumLeft === 0 ) {
        root.left = null;
    }

    let sumRight = delete_zero_sum_subtree_rec(root.right);

    if (sumRight === 0) {
        root.right = null;
    }

    return (root.data + sumLeft + sumRight);
};

let delete_zero_sum_subtree = function(root) {
    if (root) {
        let sum = delete_zero_sum_subtree_rec(root);
        if (sum === 0) {
            root = null;
        }
    }
};

let inOrderRec = (node) => {

    if ( node ) {
        inOrderRec( node.left );

        console.log(node.data);

        inOrderRec( node.right );
    }
}

class Node {
    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null
    }
}


let root = new Node(7);
root.left = new Node(5);
root.right = new Node(6);
root.left.left = new Node(-3);
root.left.right = new Node(-2);

inOrderRec(root);

delete_zero_sum_subtree(root);

console.log( "after delete zero sum subtree: ")
inOrderRec(root);
