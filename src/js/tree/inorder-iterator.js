/**
 * We are given root node of a binary tree and we have to write an iterator that takes
 * in this root and iterates through the nodes of binary tree in an inorder way.
 * The expectation is to write two critical methods of any iterator: hasNext() and getNext().
            100
          /    \
        50     200
       /  \    /  \
     25   75 125   300
 Repeatedly calling hasNext() and getNext() functions on the above binary tree should
 return nodes in the following sequence: 25, 50, 75, 100, 125, 200, 300.

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(h).
 Iterative solution has O(h) memory complexity as it instantiates a stack that has to
 store information up to height of binary tree h. It will be O(logn)
 for balanced tree and in worst case, can be O(n).
 */
class InorderIterator {
    constructor(root) {
        this.stk = [];
        // Assuming that when iterator is initialized
        // it is always at the first element of tree in its in-order
        while (root) {
            this.stk.push(root);
            root = root.left;
        }
    }
    hasNext() {
        if (!this.stk || this.stk.length === 0) {
            return false;
        } else {
            return true;
        }
    }
    // getNext returns null if there are no more elements in tree
    getNext() {
        if (!this.stk || this.stk.length === 0) {
            return null;
        }

        let r_val = this.stk.pop();
        // this.stk.remove(-1)
        let temp = r_val.right;
        while (temp) {
            this.stk.push(temp);
            temp = temp.left;
        }

        return r_val;
    }
}