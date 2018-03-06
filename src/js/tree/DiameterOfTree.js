
/*
 Given a binary tree, find the diameter of it.

 diameter of tree is defined as A longest path or route between any two nodes in a tree. 
 The path may or may not for through the root.

 Time Complexity O(N).
 finding the height of tree and diameter in the same iteration.
 Every node will return the two information in the same iteration , height of that node and diameter of tree with respect to that node.
 */
class DiameterOfTree {

    // here in improved solution, we calculate the height and diameter for every
    // node in same iteration
    // every TreeNode will return 2 values, diameter and height wrt to the
    // particular node
    diameter( root ) {
        let res = [ 0, 0 ]; // initialize the height (res[0]) and diameter as 0 (res[1])
        if (root != null) {

            let leftRes = this.diameter(root.left);
            let rightRes = this.diameter(root.right);

            let height = 1 + Math.max( leftRes[0], rightRes[0] );

            let leftDiameter = leftRes[1];
            let rightDiameter = rightRes[1];
            let rootDiameter = leftRes[0] + rightRes[0] + 1;

            let finalDiameter = Math.max(leftDiameter, rightDiameter, rootDiameter);

            res[0] = height; // update the height
            res[1] = finalDiameter;
            return res;
        }
        return res;
    }
   
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/*************************
          1
        /   \
       2     3
     /  \
    4   5
   /    /
  8    6
        \
        7
 */
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.left.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);

let diameterOfTree = new DiameterOfTree();
console.log("diameter of Tree " + diameterOfTree.diameter(root)[1]);  //6
console.log("height of Tree " + diameterOfTree.diameter(root)[0]);    //5
