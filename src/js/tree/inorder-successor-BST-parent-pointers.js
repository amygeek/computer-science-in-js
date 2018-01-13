class Node {
    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null
        this.parent = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert( d ) {
        let n = new Node(d);

        if (!this.root) {
            this.root = n;
        } else {
            let current = this.root;

            let parent = null;
            while( current ) {
                parent = current;
                if (current.data < d ) {
                    if (!current.right) {
                        current.right = n;
                        n.parent = parent;
                        break;
                    } else {
                        current = current.right;
                    }
                } else if (current.data > d) {
                    if (!current.left) {
                        current.left = n;
                        n.parent = parent;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    break; //don't allow duplicate
                }
            }
        }

    }

    findMin(root) {
        if (!root) {
            return null;
        }

        while (root.left) {
            root = root.left;
        }

        return root;
    }
    /**
     * Inorder successor of a node in binary tree is the next node in inorder traversal.
     * find inorder successor of a given binary tree node in binary search tree given parent pointers
     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Constant, O(1).
     * @param root
     * @returns {*}
     */
    inorderSuccessorParentPointer(node) {
        if (!node) {
            return null;
        }

        if (node.right) {
            return this.findMin(node.right);
        }

        let x = node.parent;
        let n = node;
        while (x !== null && x.left !== n) {
            n = x;

            x = x.parent;
        }

        return x;
    }

    findSuccessor(root, d) {

        while (root) {
            if (root.data < d) {
                root = root.right;
            } else if (root.data > d) {
                root = root.left;
            } else {
                return this.inorderSuccessorParentPointer(root);
            }
        }
        return null;
    };
}

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
   25   75 125 350

 In the above tree

 Inorder successor of 25 is 50
 Inorder successor of 50 is 75
 Inorder successor of 75 is 100
 Inorder successor of 100 is 125
 Inorder successor of 125 is 200
 Inorder successor of 200 is 350
 Inorder successor of 350 is NULL since it is the last node
 */
let bst = new BST();

bst.insert(100);
bst.insert(200);
bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(350);
bst.insert(125);
console.log(bst.findSuccessor(bst.root, 125));

