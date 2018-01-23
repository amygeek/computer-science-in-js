
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//Given a binary tree, find the leftmost value in the front row of the tree.


 let  findBottomLeftValue = ( root ) => {

    let q = []; // Queue for level order BFS traversal
    let list = [];

    // list stores the reverse level order solution
    // index 0 has the lowest level from left to right
    // so the first element of list is the solution to the problem

    if(root == null) {
        return 0;
    }
    
    q.push(root);
    
    while(q.length !== 0){

        let levelNodeLen = q.length;

        let subList = [];
    
        while ( levelNodeLen > 0) {

            let n = q.shift();

            subList.push( n.data );

            if( n.left != null ) {
                q.push( n.left );
            }
            if ( n.right != null ) {
                q.push( n.right );
            }

            levelNodeLen--;
        }

        list.unshift(subList); //push the sublist to front of the list
    }

    return list[0][0];
}
    
/*******************************
              1
            /   \
          2      3
        /  \    / \
       4    5  6   7
      / \  / \
     8  9 10 11
             /
            12
 *******************************/
   
    


let root  = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(11);
root.left.right.right.left = new TreeNode(12);

let num = findBottomLeftValue(root);
console.log("Bottom Left Value : " + num);  //12