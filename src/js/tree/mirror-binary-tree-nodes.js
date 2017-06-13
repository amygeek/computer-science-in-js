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
 350  125  25   75

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