
class ArrayStructures {
    
    constructor() {
        this.size = 10;
        this.arr = new Array(50);
    }

    generateRandomArray(){

        for(let i = 0; i < this.size; i++){

            this.arr[i] = Math.random() * 10 + 10;

        }

    }

    deleteIndex( index ){

        if(index < this.size){

            for(let i = index; i < (this.size - 1); i++){

                this.arr[i] = this.arr[i+1];

            }

            this.size--;
        }
    }

    binarySearch( value ) {

        let low = 0;
        let high = this.size - 1;

        while(low <= high){

            let mid = (high + low) / 2;

            if (this.arr[mid] < value) {

                low = mid + 1;

            } else if(this.arr[mid] > value) {

                high = mid - 1;

            } else {

                console.log("\nFound a Match for " + value + " at Index " + mid);
                low = high + 1;
            }

        }
    }

}
