class Queue {

    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length-1];
    }
    toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }
    empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        queues[Math.floor(nums[i] / digit % 10 )].enqueue(nums[i]);
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

// main program
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 100));
}
console.log("Before radix sort: ");

console.log(nums.toString())
distribute(nums, queues, 10, 1);
collect(queues, nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);

console.log("\n\nAfter radix sort: ");
console.log(nums.toString())