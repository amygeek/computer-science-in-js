class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * let[] inOrder = { 4, 2, 5, 1, 6, 3, 7 };

 let[] levelOrder = { 1, 2, 3, 4, 5, 6, 7 };

 inorder[] = {4,2,5}, leftlevelorder[] = {2,4,5}
 inorder[] ={6,3,7}, rightlevelorder[] = {3,6,7}
 Last element in the levelorder [] will be the root of the tree, here it is 1.
 Now the search element 1 in inorder[], say you find it at position i, once you find it, make note of elements 
 which are left to i (this will construct the leftsubtree) and elements which are right to i ( this will construct the rightSubtree).
 Suppose in previous step, there are X number of elements which are left of ‘i’ (which will construct the leftsubtree), 
 but these X elements will not be in the consecutive in levelorder[] so we will extract these elements from levelorder[] 
 by maintaining their sequence and store it in an array say newLeftLevel[].
 Similarly if there are Y number of elements which are right of ‘i’ (which will construct the rightsubtree), 
 but these Y elements will not be in the consecutive in levelorder[] so we will extract these elements 
 from levelorder[] by maintaining their sequence and store it in an array say newRightLevel[].
 From previous two steps construct the left and right subtree and link it to root.left and root.right respectively 
 by making recursive calls using newLeftLevel[] and newRightLevel[].
 */
class InorderLevelOrderToTree {

    makeBTree(inorder, levelOrder, start, end) {
        
        if (start > end) {
            return null;
        }
        let rootVal = levelOrder[0];

        let root = new TreeNode(rootVal);

        if (start == end) {
            return root;
        }
        let index = this.findIndex(inorder, rootVal, start, end);
        
        let left = this.newLevelOrder(inorder, levelOrder, start, index - 1);

        let right = this.newLevelOrder(inorder, levelOrder, index + 1, end);

        root.left = this.makeBTree(inorder, left, start, index - 1);
        root.right = this.makeBTree(inorder, right, index + 1, end);

        return root;
    }

    newLevelOrder(inorder, levelOrder, start, end) {
        
        let newlevel = [];
        let x = 0;
        
        for (let i = 0; i < levelOrder.length; i++) {
            
            if (this.findIndex(inorder, levelOrder[i], start, end) != -1) {
                newlevel[x] = levelOrder[i];
                x++;
            }
        }
        return newlevel;
    }
    
    findIndex(inorder, value, start, end) {
        
        for (let i = start; i <= end; i++) {
            if (value == inorder[i]) {
                return i;
            }
        }
        return -1;
    }
    
    inOrderTravesal( root) {
        if (root != null) {
            this.inOrderTravesal(root.left);
            console.log("  " + root.data);
            this.inOrderTravesal(root.right);
        }
    }

    /*
                1
              /   \
             2     3
           /  \   / \
          4   5  6   7
     */
    test () {
        let inOrder = [ 4, 2, 5, 1, 6, 3, 7 ];
        let levelOrder = [ 1, 2, 3, 4, 5, 6, 7 ];
        
        let x = this.makeBTree(inOrder, levelOrder, 0, inOrder.length - 1);
        console.log("inorder traversal of constructed tree : ");
        this.inOrderTravesal(x);
    }
}

let inorderLevelOrderToTree = new InorderLevelOrderToTree();
inorderLevelOrderToTree.test();
