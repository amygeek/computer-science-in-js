/**
 * Level Order Traversal of Binary Tree
    Given root of a binary tree, display node values at each level. Node values for all levels should be displayed on separate lines.
     100
    /    \
   50    200
  /  \   /  \
 25  75 125   350

 Level order traversal for this tree should look like:

 100
 50, 200
 25, 75, 350
 */
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