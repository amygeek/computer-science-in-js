let level_order_traversal_2 = function(root) {
    if (!root) {
        return;
    }

    let current_queue = [];
    current_queue.push(root);
    current_queue.push(null);

    while (current_queue.length != 0) {
        let temp = current_queue.shift();
        console.log(temp.data + ",");

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
};

class Node {
    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

(function() {
    let root = new Node(10);
    root.left = new Node(8);
    root.right = new Node(20);
    root.left.left = new Node(6);
    root.left.right = new Node(9);
    root.right.left = new Node(18);
    root.right.right = new Node(30);

    level_order_traversal_2(root);

})()