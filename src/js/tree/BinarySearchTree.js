
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
        let node = {
                data: data,
                left: null,
                right: null
            },

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

    /**
     * Determines if the given data is present in the tree.
     * @param {variant} data The data to find.
     * @return {Boolean} True if the data is found, false if not.
     * @method contains
     */
    contains (data){

        var found       = false,
            current     = this.root

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

                        //new root will be the old root's left child...maybe
                        replacement = this.root.left;

                        //find the right-most leaf node to be the real new root
                        while (replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        //it's not the first node on the left
                        if (replacementParent !== null){

                            //remove the new root from it's previous position
                            replacementParent.right = replacement.left;

                            //give the new root all of the old root's children
                            replacement.right = this.root.right;
                            replacement.left = this.root.left;
                        } else {

                            //just assign the children
                            replacement.right = this.root.right;
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
                        replacement = current.left;
                        replacementParent = current;

                        //find the right-most node
                        while(replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        //assign children to the replacement
                        replacement.right = current.right;
                        replacement.left = current.left;

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

    /**
     * Returns the number of items in the tree. To do this, a traversal
     * must be executed.
     * @return {int} The number of items in the tree.
     * @method size
     */
    size() {
        var length = 0;

        this.traverse(function(node){
            length++;
        });

        return length;
    }

    /**
     * Converts the tree into an array.
     * @return {Array} An array containing all of the data in the tree.
     * @method toArray
     */
    toArray() {
        var result = [];

        this.traverse(function(node){
            result.push(node.data);
        });

        return result;
    }

    /**
     * Converts the list into a string representation.
     * @return {String} A string representation of the list.
     * @method toString
     */
    toString() {
        return this.toArray().toString();
    }
    
    /**
     * Traverses the tree and runs the given method on each node
     * For a BST, inorder traversal will always print nodes in an ascending order (based on their datas).
     * @param root
     */
    inOrderRec(root){
        if (root){

            //traverse the left subtree
            if (root.left !== null){
                this.inOrderRec(root.left);
            }

            //call the process method on this node
            console.log(root.data);

            //traverse the right subtree
            if (root.right !== null){
                this.inOrderRec(root.right);
            }
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

            while (stk.length != 0 || root) {
                if (root) {
                    stk.push(root);
                    root = root.left;
                    continue;
                }
                console.log(stk[stk.length - 1].data );
                root = stk[stk.length - 1].right;
                stk.pop();
            }
        }
    }

    levelOrderTraversal (root) {

        if ( root ) {
            let current_queue = [];
            current_queue.push(root);
            current_queue.push(null);

            while (current_queue.length != 0) {

                let temp = current_queue.shift();

                console.log(temp.data);

                if (temp.left) {
                    current_queue.push(temp.left);
                }

                if (temp.right) {
                    current_queue.push(temp.right);
                }

                if (!current_queue[0]) {
                    current_queue.shift();   //dequeue null
                    if (current_queue.length != 0) {
                        current_queue.push(null);  //enqueue null on end of level
                    }
                }
            }
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
    tree.add(100);
    tree.add(50);
    tree.add(200);
    tree.add(25);
    tree.add(75);
    tree.add(125);
    tree.add(350);

    console.log('travel tree in order recursively');
    //print 25 50 75 100 125 200 350
    tree.inOrderRec(tree.root);

    console.log('travel tree in order iteratively');
    tree.inOrderIterative(tree.root);

    console.log('Level order traversal');
    //print 100 50 200 25 75 125 350
    tree.levelOrderTraversal(tree.root);

    //100
    //console.log('find inorder successor: ', tree.inorder_successor_bst(tree.root, 75));
}

test();