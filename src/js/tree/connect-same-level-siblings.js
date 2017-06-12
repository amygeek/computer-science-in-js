/**
 * Given a binary tree, connect its siblings at each level.
     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant O(1).
 * @param head
 * @returns {*}
 */
let connect_next_level = function(head) {

    let current = head;
    let next_level_head = null;
    let prev = null;

    while (current) {

        if (current.left && current.right) {

            if (!next_level_head) {
                next_level_head = current.left;
            }
            current.left.next = current.right;

            if (prev) {
                prev.next = current.left;
            }

            prev = current.right;
        } else if (current.left) {
            if (!next_level_head) {
                next_level_head = current.left;
            }
            if (prev) {
                prev.next = current.left;
            }

            prev = current.left;
        } else if (current.right) {
            if (!next_level_head) {
                next_level_head = current.right;
            }
            if (prev) {
                prev.next = current.right;
            }
            prev = current.right;
        }

        current = current.next;
    }

    if (prev) {
        prev.next = null;
    }

    return next_level_head;
};

let connect_siblings = function(root) {
    if (!root) {
        return;
    }

    root.next = null;

    while (root) {
        root = connect_next_level(root);
    }
};