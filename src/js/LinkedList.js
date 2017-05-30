class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
    
}
class LinkedList {

    constructor() {
        this.head = null;
    }

    remove(item) {
        var prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    findPrevious(item) {
        var currNode = this.head;
        while (currNode.next !== null && currNode.next.element != item ) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {

        let current = this.head;

        while(current){
            console.log(current.element)
            current = current.next;
        }
    }

    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insertAt(newElement, item) {

        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    insert(newElement) {

        let newNode = new Node(newElement);


        if (this.head === null){

            this.head = newNode;

        } else {

            let current = this.head;

            while( current.next ){
                current = current.next;
            }

            current.next = newNode;
        }


    }
}

//run tests
(function () {
    var cities = new LinkedList();
    cities.insert("Conway");
    cities.insert("Russellville");
    cities.insert("Carlisle");
    cities.insert("Alma");
    cities.insertAt("Beverly Hills", "Carlisle");
    cities.display();
    console.log();
    cities.remove("Alma");
    cities.display();

}());


