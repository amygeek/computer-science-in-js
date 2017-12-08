/*
 Convert a binary tree to a doubly linked list such that the order of
 the doubly linked list is the same as an in-order traversal of the binary tree.
 After conversion the left pointer of the node should be pointing to the previous node
 in the doubly linked list and the right pointer should be pointing to the next node in the doubly linked list.
    10
   /   \
 12    15
 / \   /
25 30 36

25 <--> 12 <-->30 <-->10 <--> 36 <--> 15

 Runtime Complexity
 Linear, O(n).

 Runtime complexity is based on the number of nodes in the tree.

 Memory Complexity
 Linear, O(h).

 Recursive solution has O(h) memory complexity as it will consume memory on the stack up
 to the height of binary tree 'h'. It will be O(log n) for balanced tree and in worst case can be O(n).
 */

class Node {

    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
class BinaryTreeToDLLRec {

    constructor() {
        this.head = null;
        this.prev = null;
    }

    /**
     * print nodes in a given doubly linked list
     * @param node
     */
    printDll( node ) {
        let str = ''
        while ( node ) {
            str += node.data + ' ';
            node = node.right;
        }
        console.log(str);
    }

    binaryTree2DllRec( node ) {
        if ( !node ) {
            return;
        }
        //this.binaryTree2DllRec will run until node.left is null
        this.binaryTree2DllRec( node.left );

        if ( !this.prev ) {
            this.head = node;  //this will the leftmost node. In test example, it is 25
        } else {
            node.left = this.prev;
            this.prev.right = node;
        }
        this.prev = node;

        this.binaryTree2DllRec(node.right);
    }

    binaryTree2DllRec2( node ) {
        // Base cases
        if ( !node ) {
            return;
        }

        // Recursively convert right subtree
        this.binaryTree2DllRec2(node.right);

        // insert root into DLL
        node.right = this.head;

        // Change left pointer of previous head
        if (this.head !== null) {
            this.head.left = node;
        }

        // Change head of Doubly linked list
        this.head = node;

        // Recursively convert left subtree
        this.binaryTree2DllRec2(node.left);
    }
}

//testing
(function(){
    /********************************************
         10
       /    \
      12    15
      / \   /
     25 30 36

     25 <--> 12 <-->30 <-->10 <--> 36 <--> 15

     ********************************************/
    // Let us create the tree shown in above diagram
    let root = new Node(10);
    root.left = new Node(12);
    root.right = new Node(15);
    root.left.left = new Node(25);
    root.left.right = new Node(30);
    root.right.left = new Node(36);

    let BT2Dll = new BinaryTreeToDLLRec();

    //BT2Dll.binaryTree2DllRec(root);
    //BT2Dll.printDll(BT2Dll.head);

    BT2Dll.binaryTree2DllRec2(root);
    BT2Dll.printDll(BT2Dll.head);

})()