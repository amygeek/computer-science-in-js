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