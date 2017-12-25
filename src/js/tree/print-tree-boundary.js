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
let print_left_perimeter = function(root) {
    while (root) {
        let curr_val = root.data;

        if (root.left) {
            root = root.left;
        } else if (root.right) {
            root = root.right;
        } else { // leaf node
            break;
        }
        console.log(curr_val + " ");
    }
};

let print_right_perimeter = function(root) {
    let r_values = []; // stack for right side values.

    while (root) {
        let curr_val = root.data;

        if (root.right) {
            root = root.right;
        } else if (root.left) {
            root = root.left;
        } else { // leaf node
            break;
        }
        r_values.push(curr_val);
    }
    while (r_values.length != 0) {
        console.log(r_values.pop() + " ");
    }
};

let print_leaf_nodes = function(root) {
    if (root) {
        print_leaf_nodes(root.left);
        if (!root.left && !root.right) {
            console.log(root.data + " ");
        }
        print_leaf_nodes(root.right);
    }
};

let display_tree_perimeter = function(root) {
    if (root) {
        console.log(root.data + " ");
        print_left_perimeter(root.left);

        if (root.left || root.right) {
            print_leaf_nodes(root);
        }

        print_right_perimeter(root.right);
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
  \    \
  40    80
print 100 50 25 40 80 125 350 200
 *********************************/

(function() {
    let root = new Node(100);
    root.left = new Node(50);
    root.right = new Node(200);
    root.left.left = new Node(25);
    //root.left.left.right = new Node(40);
    root.left.right = new Node(75);
    //root.left.right.right = new Node(80);
    root.right.left = new Node(125);
    root.right.right = new Node(350);

    display_tree_perimeter(root);

})()