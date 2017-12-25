/**
 * Given the root to a binary tree where each node has an additional pointer called sibling (or next),
 * connect the sibling pointer to next node in the same level.
 * Last node in each level should point to the first node of next level in the tree.
 * @param root
 */
let connect_siblings = function(root) {
    if (!root) {
        return;
    }

    let current = root;
    let last = root;

    while (current) {
        if (current.left) {
            last.next = current.left;
            last = current.left;
        }
        if (current.right) {
            last.next = current.right;
            last = current.right;
        }
        last.next = null;
        current = current.next;
    }
};

let connect_siblings_using_queue = function(root) {
    if (!root) {
        return;
    }

    let queue = [];
    queue.push(root);
    let prev = null;

    while (queue.length > 0) {
        let temp = queue.shift();

        if (prev) {
            prev.next = temp;
        }

        prev = temp;

        if (temp.left) {
            queue.push(temp.left);
        }

        if (temp.right) {
            queue.push(temp.right);
        }
    }
    prev.next = null;
};
