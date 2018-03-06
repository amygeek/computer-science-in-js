class BinaryTree {
    /**
     * Given the root to a binary tree where each node has an additional pointer called sibling (or next),
     * connect the sibling pointer to next node in the same level.
     * Last node in each level should point to the first node of next level in the tree.
     * @param root
     */
    connectSiblings(root) {
        if (!root) {
            return;
        }

        let current = root;
        let last = root;

        while (current) {
            if (current.left) {
                last.next = current.left;
                last = current.left;
            }
            if (current.right) {
                last.next = current.right;
                last = current.right;
            }

            current = current.next;
        }
        last.next = null;
    }

    connectSiblingsUsingQueue (root) {
        if (!root) {
            return;
        }

        let queue = [];
        queue.push(root);
        let prev = null;

        while (queue.length > 0) {
            let node = queue.shift();

            if (prev) {
                prev.next = node;
            }

            prev = node;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        prev.next = null;
    }

    printDll( node ) {
        let str = ''
        while ( node ) {
            str += node.data + ' -> ';
            node = node.next;
        }
        console.log(str + " null ");
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

                if ( node.left ) {
                    q.push( node.left );
                }

                if ( node.right ) {
                    q.push( node.right );
                }
                level--;
            }

            console.log( str );

        }
    }

    connectNextLevel (head) {

        let current = head;
        let nextLevelHead = null;
        let prev = null;

        while (current) {
    
            if (current.left && current.right) {
    
                if ( !nextLevelHead ) {
                    nextLevelHead = current.left;
                }
                current.left.next = current.right;
    
                if (prev) {
                    prev.next = current.left;
                }
    
                prev = current.right;

            } else if (current.left  ) {
                if ( !nextLevelHead ) {
                    nextLevelHead = current.left;
                }
                if (prev) {
                    prev.next = current.left;
                }
    
                prev = current.left;

            } else if ( current.right ) {
                if ( !nextLevelHead ) {
                    nextLevelHead = current.right;
                }
                if ( prev ) {
                    prev.next = current.right;
                }
                prev = current.right;
            }
    
            current = current.next;
        }
    
        if ( prev ) {
            prev.next = null;
        }

        this.printDll( head );  //print DLL

        return nextLevelHead;
    };
    
    connectSiblingsOnLevel (root) {
        if (!root) {
            return;
        }
    
        root.next = null;
    
        while (root) {

            root = this.connectNextLevel(root);

        }
    }

}


class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

/********************************************
       10
      /   \
    12    15
    /  \   /
   25  30 36

 10 -> 12 -> 15 -> 25 -> 30 -> 36 ->  null

 ********************************************/

let root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

let bTree = new BinaryTree();

console.log( "Level order traversal");
bTree.levelOrderTraversal(root);

console.log( "Connect the sibling on all levels");
bTree.connectSiblings(root );
bTree.printDll(root);

console.log( "Connect the sibling on each level");
bTree.connectSiblingsOnLevel(root );
