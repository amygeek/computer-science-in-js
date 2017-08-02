
class Node {

    constructor(data) {
        this.data = data;
    }
};


class BST extends Node {

    constructor() {
        super();
        this.root = null;
    }

    //Function to find minimum in a tree.
    findMin() {
        
        while (this.root.left != null) {
            this.root = this.root.left;
        }
        return this.root;
    }

    findMinNode (node) {

        if (node === void 0) {
            node = this.root;
        }
        while (node.left) {
            node = node.left;
        }
        return node.data;

    }

    remove (data) {
        
        this.root = this.removeInner(data, this.root);
    }

    removeInner (data, node) {
        if (node) {
            if (data < node.data) {
                node.left = this.removeInner(data, node.left);
            } else if (data > node.data) {
                node.right = this.removeInner(data, node.right);
            } else if (node.left && node.right) {
                node.data = this.findMinNode(node.right);
                node.right = this.removeInner(node.data, node.right);
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    inorder(root) {
        if(root == null) {
            return;
        }

        this.inorder(root.left);       //Visit left subtree
        console.log(" ", root.data);  //Print data
        this.inorder(root.right);      // Visit right subtree
    }

    insert( val ) {

        var root = this.root;

        if(!root){
            this.root = new Node(val);
            return;
        }

        var current = root;
        var newNode = new Node(val);

        while ( current ){
            if(val < current.data){
                if(!current.left){
                    current.left = newNode;
                    break;
                } else{
                    current = current.left;
                }
            } else{
                if(!current.right){
                    current.right = newNode;
                    break;
                } else{
                    current = current.right;
                }
            }
        }
    }

    main() {
        /*Code To Test the logic
         Creating an example tree
                5
               / \
              3   10
            /  \   \
           1   4   11
        */

        this.insert( 5 );
        this.insert( 10 );
        this.insert( 3 );
        this.insert( 4 );
        this.insert( 1 );
        this.insert( 11 );

        // Deleting node with data 5, change this data to test other cases
        this.remove(3);

        //Print Nodes in Inorder
        console.log("Inorder: ");
        this.inorder(this.root);
    }
}

let bst = new BST();
bst.main();
