/**
 * Given the root node of a binary tree, print nodes forming the boundary (perimeter).
 * In the following tree, The expected output for the below tree would be: 1, 2, 4, 9, 8, 10, 7, 3.
               1
             /   \
            2     3
          /   \    \
        4      5    7
       /       \    \
      9         8    10
 * @param root
 */
let printLeft = function(root) {
    while (root) {

        let val = root.data;

        if (root.left) {
            root = root.left;
        } else if (root.right) {
            root = root.right;
        } else { // leaf node
            break;
        }
        console.log(val + " ");
    }
};

let printRight = function(root) {
    let arr = []; // stack for right side values.

    while (root) {

        let val = root.data;

        if (root.right) {
            root = root.right;
        } else if (root.left) {
            root = root.left;
        } else { // leaf node
            break;
        }
        arr.push(val);
    }
    while (arr.length != 0) {
        console.log(arr.pop() + " ");
    }
};

let printLeaf = function(root) {
    if (root) {
        printLeaf(root.left);
        if (!root.left && !root.right) {
            console.log(root.data + " ");
        }
        printLeaf(root.right);
    }
};

let display_tree_perimeter = function(root) {
    if (root) {
        console.log(root.data + " ");

        printLeft(root.left);

        if (root.left || root.right) {
            printLeaf(root);
        }

        printRight(root.right);
    }
};

class Node {
    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null;
    }


}

/*********************************
       100
     /    \
   50     200
  /  \    /  \
 25  75  125  350

print 100 50 25 75 125 350 200
 *********************************/


let root = new Node(100);
root.left = new Node(50);
root.right = new Node(200);
root.left.left = new Node(25);
root.left.right = new Node(75);
root.right.left = new Node(125);
root.right.right = new Node(350);

display_tree_perimeter(root);

