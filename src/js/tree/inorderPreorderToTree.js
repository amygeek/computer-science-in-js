

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BTreefromInorderPreorder {

    constructor() {
        this.index = 0;
    }

    makeBTree(inOrder, preOrder, start, end ){

        if ( start > end ){
            return null;
        }
            
        let root = new Node( preOrder[this.index] );
        this.index++;
        
        if( start == end ){
            return root;
        }
        let i = this.getIndex(inOrder, root.data, start, end );

        root.left = this.makeBTree(inOrder,preOrder,start, i-1);
        root.right = this.makeBTree(inOrder,preOrder,i+1, end);
        
        return root;
    }
    getIndex(inOrder, data, start, end ){
    
        for (let i=start;i<=end;i++) {
            if( inOrder[i] == data ){
                return i;
            }
        }
        return -1;
    }

    printInOrder( root){

        if(root!=null){
            this.printInOrder(root.left);
            console.log("  " + root.data);
            this.printInOrder(root.right);
        }
    }

}

/***********************
        1
      /   \
     2     3
   /  \   / \
  4   5  6   7

 ***********************/

let inOrder = [4,2,5,1,6,3,7];
let preOrder = [1,2,4,5,3,6,7];

let tree = new BTreefromInorderPreorder();

let x = tree.makeBTree(inOrder, preOrder, 0, inOrder.length-1);

console.log("Constructed Tree : ");
tree.printInOrder(x);
