/**
 * Given a binary tree, connect its siblings at each level.
     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant O(1).
 * @param head
 * @returns {*}
 */
let connectNextLevel = (head) => {

    let current = head;
    let nextLevelHead = null;
    let prev = null;

    while (current) {

        if (current.left && current.right) {

            if ( !nextLevelHead ) {
                nextLevelHead = current.left;
            }
            current.left.next = current.right;

            if (prev) {
                prev.next = current.left;
            }

            prev = current.right;

        } else if (current.left  ) {
            if ( !nextLevelHead ) {
                nextLevelHead = current.left;
            }
            if (prev) {
                prev.next = current.left;
            }

            prev = current.left;

        } else if ( current.right ) {
            if ( !nextLevelHead ) {
                nextLevelHead = current.right;
            }
            if ( prev ) {
                prev.next = current.right;
            }
            prev = current.right;
        }

        current = current.next;
    }

    if ( prev ) {
        prev.next = null;
    }

    this.printDll( head );  //print DLL

    return nextLevelHead;
}

let connectSiblingsOnLevel = (root) => {
    if (!root) {
        return;
    }

    root.next = null;

    while (root) {

        root = this.connectNextLevel(root);

    }
}