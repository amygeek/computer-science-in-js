class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    createBST(arr, low, high) {
        if ( high < low ) {
            return null;
        }
        let mid = Math.floor( (high + low) / 2 );
        let n = new TreeNode(arr[mid]);

        n.left = this.createBST(arr, low, mid-1);
        n.right = this.createBST(arr, mid+1, high);
        return n;
    }
}

class BinarySearchTree {


    constructor() {
        this.root = null;
    }

    /**
     * Appends some data to the appropriate point in the tree. If there are no
     * nodes in the tree, the data becomes the root. If there are other nodes
     * in the tree, then the tree must be traversed to find the correct spot
     * for insertion.
     * @param {variant} data The data to add to the list.
     * @return {Void}
     * @method add
     */
    add(data){

        //create a new item object, place data in
        let node = new TreeNode( data ),

        //used to traverse the structure
            current = null;

        //special case: no items in the tree yet
        if (this.root === null){
            this.root = node;
        } else {
            current = this.root;

            while(true){

                //if the new data is less than this node's data, go left
                if (data < current.data){

                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                    //if the new data is greater than this node's data, go right
                } else if (data > current.data){

                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }

                    //if the new data is equal to the current one, just ignore
                } else {
                    break;
                }
            }
        }
    }

    insert(data) {

        this.root = this.insertRec( this.root, data);

    }

    insertRec(root, data) {

        if ( root === null ) {
            root = new TreeNode(data);
            return root;
        }
        if (root.data < data ) {
            root.right = this.insertRec(root.right, data);

        } else if ( root.data > data ) {
            root.left = this.insertRec(root.left, data);
        }

        return root;

    }

    /**
     * Determines if the given data is present in the tree.
     * @param {variant} data The data to find.
     * @return {Boolean} True if the data is found, false if not.
     * @method contains
     */
    contains (data){

        var found       = false,
            current     = this.root;

        //make sure there's a node to search
        while(!found && current){

            //if the data is less than the current node's, go left
            if (data < current.data){
                current = current.left;

                //if the data is greater than the current node's, go right
            } else if (data > current.data){
                current = current.right;

                //datas are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        return found;

    }

    /**
     * Removes the node with the given data from the tree. This may require
     * moving around some nodes so that the binary search tree remains
     * properly balanced.
     * @param {variant} data The data to remove.
     * @return {void}
     * @method remove
     */
    remove(data) {

        var found       = false,
            parent      = null,
            current     = this.root,
            childCount,
            replacement,
            replacementParent;

        //make sure there's a node to search
        while(!found && current){

            //if the data is less than the current node's, go left
            if (data < current.data){
                parent = current;
                current = current.left;

                //if the data is greater than the current node's, go right
            } else if (data > current.data){
                parent = current;
                current = current.right;

                //datas are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        if (found){

            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

            //special case: the data is at the root
            if (current === this.root){
                switch(childCount){

                    //no children, just erase the root
                    case 0:
                        this.root = null;
                        break;

                    //one child, use one as the root
                    case 1:
                        this.root = (current.right === null ? current.left : current.right);
                        break;

                    //two children, little work to do
                    case 2:

                        //new root will be the old root's right child...maybe
                        replacement = this.root.right;

                        //find the left-most leaf node to be the real new root
                        while (replacement.left !== null){
                            replacementParent = replacement;
                            replacement = replacement.left;
                        }

                        //it's not the first node on the right
                        if (replacementParent !== undefined){

                            replacementParent.left = replacement.right;

                            //give the new root all of the old root's children
                            replacement.left = this.root.left;
                            replacement.right = this.root.right;
                        } else {

                            //just assign the children
                            replacement.left = this.root.left;
                        }

                        //officially assign new root
                        this.root = replacement;

                    //no default

                }

                //non-root datas
            } else {

                switch (childCount){

                    //no children, just remove it from the parent
                    case 0:
                        //if the current data is less than its parent's, null out the left pointer
                        if (current.data < parent.data){
                            parent.left = null;

                            //if the current data is greater than its parent's, null out the right pointer
                        } else {
                            parent.right = null;
                        }
                        break;

                    //one child, just reassign to parent
                    case 1:
                        //if the current data is less than its parent's, reset the left pointer
                        if (current.data < parent.data){
                            parent.left = (current.left === null ? current.right : current.left);

                            //if the current data is greater than its parent's, reset the right pointer
                        } else {
                            parent.right = (current.left === null ? current.right : current.left);
                        }
                        break;

                    //two children, a bit more complicated
                    case 2:

                        //reset pointers for new traversal
                        replacement = current.right;


                        //find the left-most node
                        while(replacement.left !== null){
                            replacementParent = replacement;
                            replacement = replacement.left;
                        }

                        if (replacementParent !== undefined) {
                            replacementParent.left = replacement.right;

                            //assign children to the replacement
                            replacement.right = current.right;
                            replacement.left = current.left;
                        } else {
                            replacement.left = current.left;
                        }


                        //place the replacement in the right spot
                        if (current.data < parent.data){
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }

                    //no default


                }

            }

        }

    }

    minValue( root) {
        let min = root.data;
        while (root.left !== null) {
            min = root.left.data;
            root = root.left;
        }
        return min;
    }

    removeRec(root, data) {
        if (!root) {
            return null;
        }

        if ( root.data < data ) {
            root.right = this.removeRec(root.right, data);
        } else if ( root.data > data ) {
            root.left = this.removeRec(root.left, data);
        } else {
            //found the item to be deleted
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            root.data = this.find_min(root.right).data;

            root.right = this.removeRec(root.right, root.data);

        }

        return root;
    }

    /**
     * Returns the number of items in the tree.
     */
    size( root ) {
        if ( !root ) {
            return 0;
        }

        return 1 + this.size(root.left) + this.size(root.right);
    }

    /**
     * Traverses the tree and runs the given method on each node
     * For a BST, inorder traversal will always print nodes in an ascending order (based on their datas).
     * @param root
     */
    inOrderRec(root){

        if (root != null) {
            this.inOrderRec(root.left);
            console.log(root.data);
            this.inOrderRec(root.right);
        }
    }

    /**
     Runtime Complexity
     Linear, O(n).
     Memory Complexity
     O(h).

     The iterative solution has O(h) memory complexity as it instantiates a stack
     that has to store information up to the height of binary tree h.
     It will be O(log n) for a balanced tree and can be O(n) in the worst case.
     * @param root
     */
    inOrderIterative(root) {

        if ( root ) {
            let stk = [];
            let str = "";
            while (stk.length != 0 || root) {
                if (root) {
                    stk.push(root);
                    root = root.left;
                    continue;
                }
                str += stk[stk.length - 1].data + " ";

                root = stk[stk.length - 1].right;
                stk.pop();
            }
            console.log( str );
        }
    }
    

    find_min(root) {
        if (!root) {
            return null;
        }

        while (root.left) {
            root = root.left;
        }

        return root;
    }

    inorder_successor_bst(root, d) {
        if (!root) {
            return null;
        }

        let successor = null;

        while (root) {
            if (root.data < d) {
                root = root.right;
            } else if (root.data > d) {
                successor = root;
                root = root.left;
            } else {
                if (root.right) {
                    successor = this.find_min(root.right);
                }
                break;
            }
        }
        return successor;
    }

    isBST(root, min, max) {
        if (!root) {
            return true;
        }

        if ( (min && root.data < min) || (max && root.data > max)) {
            return false;
        }

        return this.isBST(root.left, min, root.data) && this.isBST(root.right, root.data, max);
        
    }
    /**
     * Find nth highest node in a Binary Search Tree(BST).
            100
           /    \
         50     200
        /  \    /  \
      25   75 125   350

     In above BST:

     Highest node is 350
     2nd highest node is 200
     3rd highest node is 125
     4th highest node is 100
     5th highest node is 75

     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     O(h)
     The recursive solution has O(h) memory complexity as it will consume memory on the stack up
     to the height of the binary search tree h. It will be O(logn) for a balanced tree and in worst can be O(n).

     In-order traversal of BST is always sorted in ascending order. To find the nth highest node,
     we will need to scan the tree in descending order that can achieve by doing reverse inorder traversal.
     The inorder traversal is normally LVR i.e. Left - Visit - Right. Reverse inorder traversal
     will be RVL i.e. Right - Visit - Left. While doing so, we keep a count of nodes seen so far.
     Once the count reaches n, that is the node to return. Let's run the above example for n = 3.
     */
    getNthNode (root, n, cnt) {
        if (!root) {
            return;
        }
        let res = this.getNthNode(root.right, n, cnt);
        if ( res ) {
            return res;
        }
        if ( n === cnt) {
            return root;
        }
        cnt += 1;
        res = this.getNthNode(root.left, n, cnt);
        if ( res ) {
            return res;
        }

        return null;
    }

    checkHeight(root) {
        if(!root) {
            return 0;
        }
        let leftHt = this.checkHeight(root.left);
        if ( leftHt === -1 ) {
            return -1;
        }

        let rightHt = this.checkHeight(root.right);
        if (rightHt === -1) {
            return -1;
        }
        let heightDiff = Math.abs(leftHt - rightHt);
        if ( heightDiff > 1 ) {
            return -1;
        } else {
            return Math.max(leftHt, rightHt) + 1;
        }
    }
    isBalanced( root ) {
        if (this.checkHeight(root) !== -1 ) {
            return true;
        }
        return false;
    }

    //createBST(arr, low, high) {
    //    if ( high < low ) {
    //        return null;
    //    }
    //    let mid = Math.floor( (high + low) / 2 );
    //    let n = new TreeNode(arr[mid]);
    //    this.add(n);
    //
    //    n.left = this.createBST(arr, low, mid-1);
    //    n.right = this.createBST(arr, mid+1, high);
    //    return n;
    //}

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

};

/*********************************
 100
 /    \
 50     200
 /  \    /  \
 25   75 125   350
 *********************************/
let test = () => {
    let tree = new BinarySearchTree();
    //tree.insert(100);
    //tree.insert(50);
    //tree.insert(200);
    //tree.insert(25);
    //tree.insert(75);
    //tree.insert(125);
    //tree.insert(350);


    let arr = [25,50,75,100, 125, 200, 350];
    let node = new TreeNode( null );
    let root = node.createBST(arr, 0, arr.length - 1);

    console.log( "size of tree: ", tree.size(root) );

    let isBst = tree.isBST(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
    console.log("isBst: ", isBst);
    console.log("tree is balanced : ", tree.isBalanced(root));

    let nthNode = tree.getNthNode(root, 1, 1);
    console.log("Nth TreeNode: ", nthNode);

    console.log('travel tree in order recursively');
    //print 25 50 75 100 125 200 350
    tree.inOrderRec(root);

    console.log('Level order traversal');
    //print 100 50 200 25 75 125 350
    tree.levelOrderTraversal(root);

    //tree.remove(100)
    tree.removeRec(root, 100)

    console.log('Level order traversal after removing node 100');
    //print 125 50 200 25 75 350
    tree.levelOrderTraversal(root);

    console.log('inOrder Iterative after removing node 100');
    tree.inOrderIterative(root);

    //100
    //console.log('find inorder successor: ', tree.inorder_successor_bst(tree.root, 75));
}

test();

