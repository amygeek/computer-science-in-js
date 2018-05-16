
/*
 Given a Binary tree create Linked Lists of all the nodes at each depth , say if the tree has height k then create k linked lists.
 * Create a ArrayList of Linked List Nodes.
 * Do the level order traversal using queue(Breadth First Search).
 * For getting all the nodes at each level, before you take out a node from queue, store the size of the queue in a variable, say you call it as level.
 * Now while level>0, take out the nodes and print it and add their children into the queue. add these to a linked list
 * After this while loop put a line break and create a new linked list
 */
class LinkedListNode {

    constructor( data ){
        this.data = data;
        this.next = null;
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class ListAtDepthBtree {

    constructor() {
        this.list = [];
    }
    levelOrderQueue( root ){

        if( root == null ) {
            return;
        }

        let q = [];
        q.push(root);

        while( q.length !== 0 ){

            let level = q.length;

            let head = null;
            let prev = null;

            while( level > 0 ) {

                let node = q.shift();

                let newNode = new LinkedListNode( node.data );

                if( !head ) {
                    head = newNode;
                } else {
                    prev.next = newNode;
                }
                prev  = newNode;

                if ( node.left ) {
                    q.push( node.left );
                }
                if ( node.right ){
                    q.push( node.right );
                }
                level--;
            }
            this.list.push(head);
        }
        this.print(this.list);
    }

    print( list ){

        let node = list.length;

        for (let i=0; i<node; i++) {

            let str = " ";
            let current = list[i];

            while( current ) {
                str += current.data + " -> ";
                current = current.next;
            }
            console.log(str + " null ");
        }
    }

    /*
     5 ->  null 
     10 -> 15 ->  null 
     20 -> 25 -> 30 -> 35 ->  null 
     */
    test() {
        let root = new TreeNode(5);
        root.left = new TreeNode(10);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(20);
        root.left.right = new TreeNode(25);
        root.right.left = new TreeNode(30);
        root.right.right = new TreeNode(35);

        this.levelOrderQueue(root);
    }
}

let listAtDepthBtree = new ListAtDepthBtree();

listAtDepthBtree.test();