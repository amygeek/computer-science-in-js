
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class PrintAllNodesAtKFromGivenNode {

    /* Recursive function to print all the nodes at distance k in
     tree (or subtree) rooted with given root. */

    printKNodeDown( node,  k) {
        // Base Case
        if (node == null || k < 0) {
            return;
        }
            
    
        // If we reach a k distant node, print it
        if (k == 0) {
            console.log(node.data);
            return;
        }
        
        // Recur for left and right subtrees
        this.printKNodeDown(node.left, k - 1);
        this.printKNodeDown(node.right, k - 1);
    }
    
    // Prints all nodes at distance k from a given target node.
    // The k distant nodes may be upward or downward.This function
    // Returns distance of root from target node, it returns -1
    // if target node is not present in tree rooted with root.
    printKDistance( node,  target,  k) {
        // Base Case 1: If tree is empty, return -1
        if ( !node ) {
            return -1;
        }
        
        // If target is same as root.  Use the downward function
        // to print all nodes at distance k in subtree rooted with
        // target or root
        if (node == target) {
            this.printKNodeDown(node, k);
            return 0;
        }
    
        // Recur for left subtree
        let left = this.printKDistance(node.left, target, k);
    
        // Check if target node was found in left subtree
        if (left != -1) {
    
            // If root is at distance k from target, print root
            // Note that left is Distance of root's left child from 
            // target
            if (left + 1 == k) {
                console.log(node.data);
               
            } else {
                // Else go to right subtree and print all k-left-2 distant nodes Note that the right child is 2 edges away from left child
                this.printKNodeDown(node.right, k - left - 2);
            }
    
            // Add 1 to the distance and return value for parent calls
            return 1 + left;
        }
    
        // MIRROR OF ABOVE CODE FOR RIGHT SUBTREE: Note that we reach here only when node was not found in left subtree

        let right = this.printKDistance(node.right, target, k);

        if (right != -1) {
            if (right + 1 == k) {
                console.log(node.data);

            } else {
                this.printKNodeDown(node.left, k - right - 2);
            }

            return 1 + right;
        }
    
        // If target was neither present in left nor in right subtree
        return -1;
    }
    
    
    /*
              1
            /   \
           2     3
         /   \    \
        4     5    8
       /    /  \
      9    6    7
                 \
                 10
                /
              11
     Nodes at distance '3' from TreeNode '5' are :  11 9 3
     x = 2,
     Nodes which are at distance 2 considering 2 as root. You will get 9. Don't check the direction of node 5
     x = 1,
     Nodes which are at distance 1 considering 1 as root. You will get 3. Don't check the direction of node 2
     x = 3
     print all nodes which are at distance 3 considering 5 as rot. You will get 11
     */
    test() {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.left.left = new TreeNode(9);
        let n5 = new TreeNode(5);
        root.left.right = n5;
        root.left.right.left = new TreeNode(6);
        root.left.right.right = new TreeNode(7);
        root.left.right.right.right = new TreeNode(10);
        root.left.right.right.right.left = new TreeNode(11);
        root.right.right = new TreeNode(8);

        console.log("Nodes at distance '3' from TreeNode '5' are : ");
        this.printKDistance(root, n5, 2);
    }
}

let printAllNodesAtKFromGivenNode = new PrintAllNodesAtKFromGivenNode();
printAllNodesAtKFromGivenNode.test();