class Result {
    constructor( node, isAnc ) {
        this.node = node;
        this.isAncestor = isAnc;
    }
}
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
/*
 Find the Lowest Common Ancestor of two given nodes in a Binary Tree
 In a given binary tree, The lowest common ancestor of two nodes n1 and n2 will be a node X
 such that node X will be the lowest node who has n1 and n2 as its descendants.

 Start will the root.
 If root matches with any of the given nodes (n1, n2) then return root as Lowest Common Ancestor.
 IF not then make recursive callas to left subtree and right subtree for the search of the nodes n1 and n2.
 Now both the nodes (n1 and n2) will be in the left subtree of the current visiting node OR it will be in the right subtree of current visiting OR n1 and n2 will be in each side of current visiting node.
 If you find a node which has one node in its left subtree and one node in its right subtree than this node will be our lowest common ancestor.
 If both the nodes (n1 and n2) will be in the left subtree of the current visiting node then go left
 If both the nodes (n1 and n2) will be in the right subtree of the current visiting node then go right.
 */
class LowestCommonAncestorBT {

    constructor() {

        this.v1 = false;  // use for checking if n1 is in the tree
        this.v2 = false;   // use for checking if n2 is in the tree
    }

    findLCA(root, n1, n2){

        if( root == null){
            return null;
        } else{

            if( root.data == n1.data || root.data == n2.data ){
                return root;
            }
            let left = this.findLCA( root.left, n1, n2);
            let right = this.findLCA( root.right, n1, n2);

            if ( left != null && right != null){
                return root;
            }
            if ( left != null ){
                return left;
            } else if ( right != null ){
                return right;
            }
            return null;
        }
    }

    findLCA2( root, n1, n2 ) {

        if ( !root ) {
            return null;
        }

        let lca = this.findLCARec( root, n1, n2 );

        if ( this.v1 && this.v2) {
            return lca;
        }
        return null;
    }

    findLCARec( root, n1, n2 ) {

        if ( !root ) {
            return null;
        }

        if ( root.data === n1.data ) {
            this.v1 = true;
            return root;
        }

        if ( root.data === n2.data ) {
            this.v2 = true;
            return root;
        }

        let left = this.findLCARec(root.left, n1, n2 );
        let right = this.findLCARec(root.right, n1, n2 );

        if ( left !== null && right !== null ) {
            return root;
        }
        return (left !== null) ? left : right;
    }

    commonAncestor( root, p, q ) {
        let res = this.findAncesstor( root, p, q);

        if ( res.isAncestor ) {
            return res.node;
        }
        return null;
    }

    findAncesstor( root, p, q ) {

        if ( !root ) {
            return new Result( null, false );
        }
        if ( root === p && root === q ) {
            return new Result( root, true );
        }

        let rx = this.findAncesstor(root.left, p, q );
        if ( rx.isAncestor ) {
            return rx;
        }

        let ry = this.findAncesstor(root.right, p, q );
        if ( ry.isAncestor ) {
            return ry;
        }

        if ( rx.node && ry.node ) {
            return new Result( root, true )
        } else if ( root === p || root === q ) {
            let isAncestor = (rx.node || ry.node ) ? true : false;
            return new Result( root, isAncestor );
        } else {
            return new Result( rx.node ? rx.node : ry.node, false )
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
    test () {
        let root  = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        let n3 = new TreeNode(5);
        root.left.right = n3;
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        let n1 = new TreeNode(8);
        root.left.left.left = n1;
        root.left.left.right = new TreeNode(9);
        root.left.right.left = new TreeNode(10);
        let n2 = new TreeNode(11);
        root.left.right.right = n2 ;

        
        let x = this.commonAncestor(root, n1, n2);
        //Lowest Common Ancestor (8, 11 ) is 2
        console.log("Lowest Common Ancestor ("+n1.data+", "+ n2.data +" ) is " + x.data);
        x = this.commonAncestor(root,n2,n3);
        //Lowest Common Ancestor (11, 5 ) is 5
        console.log("Lowest Common Ancestor ("+n2.data+", "+ n3.data +" ) is " + x.data);
    }
}

let lowestCommonAncestorBT = new LowestCommonAncestorBT();
lowestCommonAncestorBT.test();