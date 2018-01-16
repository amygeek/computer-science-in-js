class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class PreorderToTree {
    constructor() {
        this.pIndex = 0;
    }

    inOrderIterative(root) {

        if ( root ) {
            let stk = [];
            let str = "";
            while (stk.length != 0 || root) {
                if (root) {
                    stk.push(root);
                    root = root.left;
                    continue;
                }
                str += stk[stk.length - 1].data + " ";

                root = stk[stk.length - 1].right;
                stk.pop();
            }
            console.log( str );
        }
    }

    createBSTPreOrder ( arr, len, data, min, max) {

        if ( this.pIndex < len && arr[this.pIndex] > min && arr[this.pIndex] < max) {

            let node = new TreeNode(data);

            this.pIndex++;

            if ( this.pIndex < len  ) {
                node.left = this.createBSTPreOrder(arr, len, arr[this.pIndex], min, data);
                node.right = this.createBSTPreOrder(arr, len, arr[this.pIndex], data, max);
            }

            return node;
        }

        return null;
    }

    /**
     Example: int[] preOrder = { 10, 5, 2, 7, 15, 12, 20 };
     Use Stack.
     First element in the preorder[] will definitely be the root, which is 20 here.
     Create a node with data 20 and push it in Stack.
     Now take the next element (say data) from the preorder sequence.
     If data is greater than the top item in the stack then keep popping out the nodes from the stack, keep storing it in temp node till the top node in stack is less than the data.
     create a node with data and add it to the right of temp node and push the temp node to stack.
     If data is less than the top item in the stack then create a node with data and add it to the left of top node in stack and push it in the stack.
     Repeat the above two steps till all the elements in preorder[] is over.
     return the root


     * @param arr
     */
    createBSTPreOrderIterative ( arr ) {

        let n = arr.length;
        let st = [];
        let root = new TreeNode(arr[0]);
        st.push(root);

        for ( let i=1; i<n; i++) {

            let x = null;
            while ( st.length !== 0 && arr[i] > st[st.length-1].data) {
                x = st.pop();
            }
            if ( x !== null ) {
                x.right = new TreeNode(arr[i]);
                st.push( x.right );
            } else {
                st[st.length-1].left = new TreeNode(arr[i]);
                st.push(st[st.length-1].left);
            }
        }

        return root;
    }
}

let arr = [ 10, 5, 2, 7, 15, 12, 20];
let tree = new PreorderToTree();

/**
       10
     /   \
    5     15
   / \   /  \
  2  7  12  20
 */
console.log('PreOrder to tree  recursively');
let root = tree.createBSTPreOrder(arr, arr.length, arr[0], Number.MIN_VALUE, Number.MAX_VALUE );
tree.inOrderIterative( root );

console.log('PreOrder to tree  iteratively');
let root2 = tree.createBSTPreOrderIterative(arr);
tree.inOrderIterative( root2 );