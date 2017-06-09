/**
 * Inorder successor of a node in binary Search Tree (BST) is the next node in inorder traversal.
     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Constant, O(1).

            100
           /    \
         50     200
        /  \    /  \
      25   75 125   350

     In the above tree

     Inorder successor of 25 is 50
     Inorder successor of 50 is 75
     Inorder successor of 75 is 100
     Inorder successor of 100 is 125
     Inorder successor of 125 is 200
     Inorder successor of 200 is 350
     Inorder successor of 350 is NULL since it is the last node
 */

let find_min = (root) => {
    if (!root) {
        return null;
    }

    while (root.left) {
        root = root.left;
    }

    return root;
};


let inorder_successor_bst = (root, d) => {
    if (!root) {
        return null;
    }

    let successor = null;

    while (root) {
        if (root.data < d) {
            root = root.right;
        } else if (root.data > d) {
            successor = root;
            root = root.left;
        } else {
            if (root.right) {
                successor = find_min(root.right);
            }
            break;
        }
    }
    return successor;
};