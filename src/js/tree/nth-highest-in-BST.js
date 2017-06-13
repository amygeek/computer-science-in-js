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
let current_count = 0;
let find_nth_highest_in_bst = function(node, n) {
    if (!node) {
        return null;
    }

    let result = find_nth_highest_in_bst(node.right, n);
    if (result) {
        return result;
    }

    current_count = current_count + 1;

    if (n === current_count) {
        return node;
    }

    result = find_nth_highest_in_bst(node.left, n);
    if (result) {
        return result;
    }

    return null;
};

/**
 * If each node in the BST has a count of total nodes in its left and right subtrees, then we can find nth highest in a non-linear way.
 * @param node
 * @param n
 * @returns {*}
 */
let find_nth_highest_in_bst_with_counts = function(node, n) {

    if (!node) {
        return null;
    }

    let left_count = 0;

    if (node.left) {
        left_count = node.left.count;
    }

    let k = node.count - left_count;

    if (k === n) {
        return node;
    } else if (k > n) {
        return find_nth_highest_in_bst_with_counts(node.right, n);
    } else {
        return find_nth_highest_in_bst_with_counts(node.left, n - k);
    }
};