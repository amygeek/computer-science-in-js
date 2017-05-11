
const MAX_SIZE = 10;
// Creating a class named Queue.
class QueueCircularInArray {

    // Constructor - set front and rear as -1. 
    // We are assuming that for an empty Queue, both front and rear will be -1.
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.arr = [];
    }
    
    // To check wether Queue is empty or not
    isEmpty() {
        return (this.front == -1 && this.rear == -1);
    }
    
    // To check whether Queue is full or not
    isFull() {
        return ( this.rear + 1 ) % MAX_SIZE == this.front ? true : false;
    }
    
    // Inserts an element in queue at rear end
    enqueue( x ) {
        if(this.isFull()) {
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear+1) % MAX_SIZE;
        }
        this.arr[this.rear] = x;
    }
    
    // Removes an element in Queue from front end. 
    dequeue() {
        if(this.isEmpty()) {
            return;
        } else if(this.front == this.rear ) {
            this.rear = this.front = -1;
        } else {
            this.front = ( this.front + 1 ) % MAX_SIZE;
        }
    }
    // Returns element at front of queue. 
    front() {
        if(this.front == -1) {
            console.log("Error: cannot return front from empty queue");
            return -1;
        }
        return this.arr[this.front];
    }
    /* 
     Printing the elements in queue from front to rear. 
     This function is only to test the code. 
     This is not a standard function for Queue implementation. 
     */
    print() {
        // Finding number of elements in queue  
        let count = (this.rear + MAX_SIZE - this.front) % MAX_SIZE + 1;
        console.log("Queue       : " );
        for(let i = 0; i <count; i++){
            let index = (this.front + i ) % MAX_SIZE; // Index of element while travesing circularly from front
            
            console.log(this.arr[index] );
        }
    }

    main() {
        /*Driver Code to test the implementation
         Printing the elements in Queue after each enqueue or dequeue 
         */
        let Q = new QueueCircularInArray(); // creating an instance of Queue. 
        Q.enqueue(2);
        Q.print();
        Q.enqueue(4);
        Q.print();
        Q.enqueue(6);
        Q.print();
        Q.dequeue();
        Q.print();
        Q.enqueue(8);
        Q.print();
    }
};

//run test
(function(){
    let Q = new QueueCircularInArray(); // creating an instance of Queue.
    Q.main();
})();

