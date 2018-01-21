
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class PrintAllNodesAtKFromGivenNode {

    printAllNodes( root, node, distance) {
        
        let pathLen = this.pathLen(root, node) - 1;
    
        this.path(root, node, pathLen, distance);
    }
    
    print( root, node, prev, k, searchingDown) {
        
        if (root != null) {
            if (k == 0 && root.data != node) {
                console.log(" " + root.data);
            }
            if (searchingDown) {
                this.print(root.left, node, prev, --k, searchingDown);
                this.print(root.right, node, prev, k, searchingDown);
            } else {
                if (root.left != prev) {
                    this.print(root.left, node, prev, --k, searchingDown);
                }
                if (root.right != prev) {
                    this.print(root.right, node, prev, --k, searchingDown);
                }
            }
        }
    }
    
    path(root, node, k, distance) {
    
        if (root == null) {
            return null;
        }
    
        let x = null;
        if (root.data == node || (x = this.path(root.left, node, k - 1, distance)) != null || (x = this.path(root.right, node, k - 1, distance)) != null) {
            if (k == 0) {
                this.print(root, node, x, distance - k, true);
            } else {
                this.print(root, node, x, distance - k, false);
            }
    
            return root;
        }
        return null;
    }
    
    pathLen( root, n1 ) {
        if (root != null) {
            let x = 0;
            if ((root.data == n1) || (x = this.pathLen(root.left, n1)) > 0 || (x = this.pathLen(root.right, n1)) > 0) {
                return x + 1;
            }
        }
        return 0;
    }
    /*
              1
            /   \
           2     3
         /   \    \
        4     5    8
       /    /  \
      9    6    7
                 \
                 10
                /
              11
     Nodes at distance '3' from TreeNode '5' are :  11 9 3
     x = 2,
     Nodes which are at distance 2 considering 2 as root. You will get 9. Don't check the direction of node 5
     x = 1,
     Nodes which are at distance 1 considering 1 as root. You will get 3. Don't check the direction of node 2
     x = 3
     print all nodes which are at distance 3 considering 5 as rot. You will get 11
     */
    test() {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.left.left = new TreeNode(9);
        root.left.right = new TreeNode(5);
        root.left.right.left = new TreeNode(6);
        root.left.right.right = new TreeNode(7);
        root.left.right.right.right = new TreeNode(10);
        root.left.right.right.right.left = new TreeNode(11);
        root.right.right = new TreeNode(8);

        console.log("Nodes at distance '3' from TreeNode '5' are : ");
        this.printAllNodes(root, 5, 3);
    }
}

let printAllNodesAtKFromGivenNode = new PrintAllNodesAtKFromGivenNode();
printAllNodesAtKFromGivenNode.test();