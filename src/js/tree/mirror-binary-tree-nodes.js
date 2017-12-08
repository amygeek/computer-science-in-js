/**
 * Given the root node of a binary tree, swap the 'left' and 'right' children for each node.
        100
       /    \
     50     200
    /  \    /  \
  25   75 125   350

         100
       /     \
     200     50
    /   \    /  \
 350  125  75   25

 * @param root
 */
let mirror_tree = function(root) {
    if (!root) {
        return;
    }

    //  We will do a post-order traversal of the binary tree.
    if (root.left) {
        mirror_tree(root.left);
    }

    if (root.right) {
        mirror_tree(root.right);
    }

    //  Let's swap the left and right nodes at current level.
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
};

let inorder = (root) => {

    if ( root ) {
        let stk = [];

        while (stk.length != 0 || root) {
            if (root) {
                stk.push(root);
                root = root.left;
                continue;
            }
            console.log(stk[stk.length - 1].data );
            root = stk[stk.length - 1].right;
            stk.pop();
        }
    }

}
class Node {
    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null;
    }


}

(function() {
    let root = new Node(100);
    root.left = new Node(50);
    root.right = new Node(200);
    root.left.left = new Node(25);
    root.left.right = new Node(75);
    root.right.left = new Node(125);
    root.right.right = new Node(350);

    inorder(root);

    mirror_tree(root);
    console.log("Mirror Tree")
    inorder(root);

})()