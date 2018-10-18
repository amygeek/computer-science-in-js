//check T2 is a subtree of T1 very large binary tree
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTree {

    containsTree ( t1, t2 ) {
        if ( t2 === null ) {
            return true;  //empty tree is s subtree
        }

        return this.subTree ( t1, t2 );
    }

    subTree( t1, t2 ) {
        if ( t1 === null ) {
            return false;  //big tree is tempty & subtree not found
        }

        if ( t1.data === t2.data && this.matchTree( t1, t2 ) ) {           
            return true;          
        }

        return this.subTree(t1.left, t2 ) || this.subTree(t1.right, t2 );
    }

    matchTree( t1, t2 ) {
        if ( t1 === null && t2 === null ) {
            return true;   // nothing left in the subtree
        }

        if ( t1 === null || t2 === null ) {
            return false;  //if only one subtree is empty both not both
        }

        if ( t1.data !== t2.data ) {
            return false;
        }

        return this.matchTree(t1.left, t2.left ) && this.matchTree(t1.right, t2.right );
    }
}


/*
          1
        /   \
       2     3
     /  \   / \
    4   5  6   7
   / \  / \
  8  9 10 11

 */

let root  = new TreeNode(1);
let t1 = new TreeNode(2);
root.left = t1;
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
let t2 = new TreeNode(5);
root.left.right = t2;
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
let t3 = new TreeNode(8);
root.left.left.left = t3;
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
let n2 = new TreeNode(11);
root.left.right.right = n2 ;

let tree = new BTree();

let x = tree.containsTree(t1, t2);
console.log( "t1 contains t2: ",  x );

x = tree.containsTree(t2, t3);
console.log( "t2 contains t3: ",  x );

