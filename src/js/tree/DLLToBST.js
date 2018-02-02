
class DLL {
    constructor( data ) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
/*
 Given a sorted doubly linked list, convert it into Balanced binary search tree
 Get the size of the Doubly Linked list.
 Take left n/2 nodes and recursively construct left subtree
 Make the middle node as root and assign the left subtree( constructed in step 2) to root’s left.
 Recursively construct right subtree and link it to the the right of root made in step 3.
 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7

      4
    /  \
   2    6
  / \  / \
 1  3 5   7
 */
class DLLToBST {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.root = null;
    }
    add( data) {
        let n = new DLL(data);
        if (this.head == null) {
            this.head = n;
            this.tail = n;
        } else {
            this.head.prev = n;
            n.next = this.head;
            this.head = n;
        }
        this.size++;
    }

    dLLtoBST( size ) {
        if (size <= 0) {
            return null;
        }

        let leftSize = Math.floor( size / 2 );
        let left = this.dLLtoBST(leftSize);

        let root = this.head;
        root.prev = left;
        this.head = this.head.next;

        root.next = this.dLLtoBST(size - leftSize - 1);

        return root;
    }

    inOrder( root ) {
        if (root != null) {
            this.inOrder(root.prev);
            console.log(" " + root.data);
            this.inOrder(root.next);
        }
    }

    printDLL( head) {
        let str ="";
        let curr = head;
        while (curr != null) {
            str += " " + curr.data;
            curr = curr.next;
        }
        console.log(str);
    }

    levelOrderTraversal ( root ) {
        if ( !root ) {
            return;
        }

        let q = [];
        q.push(root);

        while( q.length !== 0 ) {

            let level = q.length;
            let str = " ";

            while ( level !== 0 ) {

                let node = q.shift();

                str += node.data + " ";

                if ( node.prev ) {
                    q.push( node.prev );
                }

                if ( node.next ) {
                    q.push( node.next );
                }
                level--;
            }

            console.log( str );

        }
    }
}

let root = new DLLToBST();
//root.add(9);
//root.add(8);
root.add(7);
root.add(6);
root.add(5);
root.add(4);
root.add(3);
root.add(2);
root.add(1);

let head = root.head;
console.log("DLL is : " );
root.printDLL(head)

let tree = root.dLLtoBST( root.size );
console.log("Inorder traversal of contructed BST");
root.levelOrderTraversal(tree);

