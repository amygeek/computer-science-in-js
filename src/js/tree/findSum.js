/*
print all paths which sum to given value
O(nlog(n))
 */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTree {

    findSum( node, sum ) {

        let path =[];
        this.findSumRec ( node, sum, path, 0 )
    }

    findSumRec( node, sum, path, level) {

        if ( !node ) {
            return;
        }
        path[level] = node.data;   //insert current node to path

        //look for paths with sum that ends at this node
        let total = 0;
        for (let i=level; i>=0; i-- ) {
            total += path[i];

            if ( total === sum ) {
                this.print(path, i, level);
            }
        }

        //search nodes beneath this one
        this.findSumRec(node.left, sum, path, level + 1 );
        this.findSumRec(node.right, sum, path, level + 1);

        //remove current node from path, not necessary since we would ignore this value, but is good practice
        path[level] = Number.MIN_VALUE;
    }

    print( path, start, end ) {
        let str = ""
        for ( let i=start; i<=end; i++ ) {
            str += path[i] + " ";
        }
        console.log( str );
    }

    depth( node ) {

        if ( !node ) {
            return 0;
        }
        return 1 + Math.max(this.depth( node.left ), this.depth(( node.right )));
    }
}

/*
               1
             /   \
            2     3
          /  \   / \
        -2   5  6   7
        / \  / \
       8  9 10 11
 sum 10:
 1 2 -2 9
 10
 1 3 6
 3 7

 */

let root  = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(-2);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(11);

let tree = new BTree();

tree.findSum(root, 10);

