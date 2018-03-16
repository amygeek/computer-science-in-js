
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
/**
 * Find the Distance between Two Nodes of a Binary Tree.
 */
class DistanceOfTwoNodesBTree {

    findDistance( root, n1, n2 ) {
        let x = this.pathLen(root, n1) - 1;
        let y = this.pathLen(root, n2) - 1;
        let lcaData = this.findLCA(root, n1, n2).data;
        let lcaDistance = this.pathLen(root, lcaData) - 1;
        return (x + y) - 2 * lcaDistance;
    }
    
    pathLen(root, n1) {

        if (root != null) {
            /*
            let x = 0;
            if ((root.data == n1) || ( x = this.pathLen(root.left, n1) ) > 0 || ( x = this.pathLen(root.right, n1) ) > 0 ) {

                return x + 1;
            }
           */
            if (root.data == n1) {
                return 1;
            }

            return 1 + (this.pathLen(root.left, n1) || this.pathLen(root.right, n1));
        }
    }
    
    findLCA( root, n1, n2 ) {
        if (root != null) {
            
            if (root.data == n1 || root.data == n2) {
                return root;
            }
            let left = this.findLCA(root.left, n1, n2);
            let right = this.findLCA(root.right, n1, n2);
    
            if (left != null && right != null) {
                return root;
            }
            if (left != null) {
                return left;
            }
            if (right != null) {
                return right;
            }
        }
        return null;
    }
    
    /*
            1
          /   \
        2      3
      /  \    / \
     4    5  6   7
    / \  / \
   8  9 10 11
     Distance(X, Y) = Distance(root, X) + Distance(root, Y) — 2 * (Distance(root to LCA(X,Y)
     where LCA(X,Y) = Lowest Common Ancestor of X,Y
     In the above example if Distance(8,11) = 4
     Distance(root, 8) = 3
     Distance(root, 11) = 3
     LCA(20, 45) = 2
     Distance(root, 2) = 1
     Distance(20,45) = 3+3 — 2*1 = 4
     */
    test() {
        let root  = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        root.left.left.left = new TreeNode(8);
        root.left.left.right = new TreeNode(9);
        root.left.right.left = new TreeNode(10);
        root.left.right.right = new TreeNode(11);

        console.log("Distance between 8 and 11 is : " + this.findDistance(root, 8, 11));  //4
    }
}

let distanceOfTwoNodesBTree = new DistanceOfTwoNodesBTree();
distanceOfTwoNodesBTree.test();