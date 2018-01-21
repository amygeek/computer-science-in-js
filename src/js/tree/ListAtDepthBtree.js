
/*
 Given a Binary tree create Linked Lists of all the nodes at each depth , say if the tree has height k then create k linked lists.
 * Create a ArrayList of Linked List Nodes.
 * Do the level order traversal using queue(Breadth First Search).
 * For getting all the nodes at each level, before you take out a node from queue, store the size of the queue in a variable, say you call it as levelNodes.
 * Now while levelNodes>0, take out the nodes and print it and add their children into the queue. add these to a linked list
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
        let levelNodes = 0;

        q.push(root);

        while( q.length !== 0 ){

            levelNodes = q.length;

            let head = null;
            let prev = null;

            while( levelNodes > 0 ) {

                let n = q.shift();

                let newNode = new LinkedListNode( n.data );

                if( head == null ) {
                    head = newNode;
                } else {
                    prev.next = newNode;
                }
                prev  = newNode;

                if ( n.left != null ) {
                    q.push( n.left );
                }
                if ( n.right != null ){
                    q.push( n.right );
                }
                levelNodes--;
            }
            this.list.push(head);
        }
        this.display(this.list);
    }

    display( list ){

        let n = list.length;

        for (let i=0; i<n; i++) {

            let str = " ";
            let head = list[i];

            while( head != null ) {
                str += head.data + " -> ";
                head = head.next;
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