/**
 * Convert an N-ary tree to Binary tree and then convert this Binary tree back to its original N-ary tree structure.
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(h).

 Initial Direction = Left
 For each node, append its children in a binary tree in given direction (Left/Right).
 If any of the nodes in step 2 have further children, then change the direction and do step 2

 * @param node
 */
    

class NTreeToBTree {
    
    NaryToBinary(node) {
        return this.NaryToBinaryRec(node, 1);
    }
    
    NaryToBinaryRec(root, isLeft) {
        if (!root) {
            return;
        }
    
        let node = new BinaryTree(root.data);
        let last = node;
    
        for (let c in root.children) {
            if (isLeft === 1) {
                last.left = this.NaryToBinaryRec(root.children[c], 0);
                last = last.left;
            } else {
                last.right = this.NaryToBinaryRec(root.children[c], 1);
                last = last.right;
            }
        }
    
        return node;
    }
    
    binaryToNary(node) {
        return this.binaryToNaryRec(node, 1);
    };
    
    binaryToNaryRec(node, isLeft) {
        if (!node) {
            return;
        }

        let nNode = new NTreeNode(node.data);
        let current = node;

        if (isLeft === 1) {
            while (current.left) {
                let child = this.binaryToNaryRec(current.left, 0);
                nNode.children.push(child);
                current = current.left;
            }
        } else {
            while (current.right) {
                let child = this.binaryToNaryRec(current.right, 1);
                nNode.children.push(child);
                current = current.right;
            }
        }
        return nNode;
    }

    printNaryTreeOnLevel(node){
        if ( !node ) {
            return;
        }
        let q = [];
        q.push(node);

        while (q.length > 0) {

            let level = q.length;
            let str = "";
            while ( level > 0 ) {

                let n = q.shift();
                str += n.data + " ";

                for(let i=0; i<n.children.length; i++) {

                    q.push(n.children[i]);
                }

                level--;
            }
            console.log( str );
        }
    }

    printBTreeOnLeve( node ) {
        if ( !node ) {
            return;
        }

        let q = [];
        q.push( node );

        while ( q.length > 0 ) {
            let level = q.length;
            let str = "";

            while( level > 0 ) {
                let n = q.shift();
                str += n.data + " ";

                if ( n.left ) {
                    q.push(n.left);
                }
                if (n.right ) {
                    q.push( n.right );
                }
                level--;
            }
            console.log( str );
        }
    }
}

class NTreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/***   Binary Tree
         1
        /
       2
      /
     3
    / \
   4   5
        \
         6

       N_ary Tree
            1
        /   |   \
       2    3   4
          /   \
         5     6
 */
let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(3);
root.left.left.left = new BinaryTree(4);
root.left.left.right = new BinaryTree(5);
root.left.left.right.right = new BinaryTree(6);

let tree = new NTreeToBTree();

console.log("Binary Tree Level Traversal");
tree.printBTreeOnLeve(root);

let newNode = tree.binaryToNary(root);

console.log("N_ary Tree Level Traversal");
tree.printNaryTreeOnLevel(newNode);

let bNode = tree.NaryToBinary(newNode);
console.log("Binary Tree Level Traversal from N_ary to Binary");
tree.printBTreeOnLeve(bNode);

