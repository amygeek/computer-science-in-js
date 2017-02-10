class SelectionSort {
    
    constructor( data ) {
        this.data = data;
    }
    
    selectionSort() {
        let min, 
            temp, 
            len = this.data.length;
        
        for (var i = 0; i < len - 1; i++) {
            min = i;
            for (var j = i + 1; j < len; j++) {
                if (this.data[j] < this.data[min]) {
                    min = j;
                }
            }
            this.swap(i, min);
        }
        
        return this.data;
    }
    
    swap(i, j) {
        let temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

} 

export default SelectionSort;