/*
 Convert a binary tree to a doubly linked list such that the order of
 the doubly linked list is the same as an in-order traversal of the binary tree.
 After conversion the left pointer of the node should be pointing to the previous node
 in the doubly linked list and the right pointer should be pointing to the next node in the doubly linked list.
      10
    /   \
   12   15
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
class BinaryTreeToDLL {

    constructor() {
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

    updatePrev( node ) {

        if ( !node ) {
            return;
        }
        this.updatePrev( node.left );
        node.left = this.prev;
        this.prev = node;
        this.updatePrev( node.right );
    }

    updateNext( node ) {
        while ( node.right ) {
            node = node.right;
        }

        while ( node && node.left ) {
            let left = node.left;
            left.right = node;
            node = node.left;
        }

        return node;
    }

    binaryTree2Dll( node ) {
        this.updatePrev( node );
        return this.updateNext( node );
    }

    inOrderRec(root){
        if (root){

            //traverse the left subtree
            if (root.left !== null){
                this.inOrderRec(root.left);
            }

            //call the process method on this node
            console.log(root.data);

            //traverse the right subtree
            if (root.right !== null){
                this.inOrderRec(root.right);
            }
        }
    }

}

//testing
(function(){
    /********************************************
          10
        /    \
       12    15
      /  \   /
     25  30 36

     25 <--> 12 <-->30 <-->10 <--> 36 <--> 15

     ********************************************/
        // Let us create the tree shown in above diagram
    let root = new Node(10);
    root.left = new Node(12);
    root.right = new Node(15);
    root.left.left = new Node(25);
    root.left.right = new Node(30);
    root.right.left = new Node(36);

    let BT2Dll = new BinaryTreeToDLL();

    BT2Dll.inOrderRec(root);
    let head = BT2Dll.binaryTree2Dll(root);
    BT2Dll.printDll(head);

})()