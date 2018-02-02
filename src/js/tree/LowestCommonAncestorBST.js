
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 1. Start will the root.
 2. If root>n1 and root>n2 then lowest common ancestor will be in left subtree.
 3. If root<n1 and root<n2 then lowest common ancestor will be in right subtree.
 4. If Step 2 and Step 3 is false then we are at the root which is lowest common ancestor, return it.
 */
class LowestCommonAncestorBST {

    //using postOrder traversal
    lowestCommonAncestor( root, n1, n2 ) {

        if (root == null) {
            return null;
        }
        // If root>n1 and root>n2 then lowest common ancestor will be in left subtree.
        if (root.data > n1.data && root.data > n2.data) {
            return this.lowestCommonAncestor(root.left, n1, n2);

        } else if (root.data < n1.data && root.data < n2.data) {
            // If root<n1 and root<n2 then lowest common ancestor will be in right subtree.
            return this.lowestCommonAncestor(root.right, n1, n2);
        }
        // if I am here that means i am at the root which is lowest common ancestor
        return root;
    }

    lowestCommonAncestor2( root, n1, n2 ) {

        while (root != null) {

            // If root>n1 and root>n2 then lowest common ancestor will be in left subtree.
            if (root.data > n1.data && root.data > n2.data) {
                root = root.left;

            } else if (root.data < n1.data && root.data < n2.data) {
                // If root<n1 and root<n2 then lowest common ancestor will be in right subtree.
                root = root.right;
            } else {
                // if I am here that means i am at the root which is lowest common ancestor
                return root;
            }
        }
        return root;
    }
    /*
         15
       /   \
      10   20
     /  \
    5   13
       /  \
      12  14

     Lowest Common Ancestor of Nodes 5 and 14 is : 10
     */
    test() {
        
        let root = new TreeNode(15);
        root.left = new TreeNode(10);
        root.right = new TreeNode(20);
        let n1 = new TreeNode(5);
        root.left.left = n1;
        root.left.right = new TreeNode(13);
        let n2 = new TreeNode(14);
        root.left.right.right = n2;
        root.left.right.left = new TreeNode(12);

    //        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    //        TreeNode root = TreeNode.createMinimalBST(array);
    //        TreeNode n1 = root.find(6);
    //        TreeNode n2 = root.find(9);

        
        console.log("Recursive-Lowest Common Ancestor of Nodes " + n1.data + " and " + n2.data + " is : "
            + this.lowestCommonAncestor(root, n1, n2).data);

        let x = this.lowestCommonAncestor2(root, n1, n2);

        console.log("Iterative-Lowest Common Ancestor of Nodes " + n1.data + " and " + n2.data + " is : " + x.data);

    }
}

let lowestCommonAncestorBST = new LowestCommonAncestorBST();
lowestCommonAncestorBST.test();