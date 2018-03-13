/**
 * Given roots of two binary trees, determine if these trees are identical or not.
 * Identical trees have the same layout and data at each node.
 * Runtime Complexity
 Linear, O(n).
 * Memory Complexity
 O(h).
 * The recursive solution has O(h) memory complexity as it will consume memory on the stack
 * up to the height of binary tree h. It will be O(log n) for a balanced tree
 * and in the worst case can be O(n).
 * @param root1
 * @param root2
 * @returns {boolean}
 */
let identicalBinaryTrees = function(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }

    if (root1 && root2) {
        return (root1.data === root2.data &&
        identicalBinaryTrees(root1.left, root2.left) &&
        identicalBinaryTrees(root1.right, root2.right));
    }

    return false;
};