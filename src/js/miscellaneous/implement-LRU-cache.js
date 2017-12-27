/**
 * Least Recently Used (LRU) is a common caching strategy which defines policy to evict elements
 * from the cache to make room for new elements when the cache is full i.e. discards the least recently used items first.
 Runtime Complexity
 get: Constant, O(1)

 set: Constant, O(1)

 Memory Complexity
 Linear, O(n) where n is the size of cache.

 We need to implement a Linked List to help with LRUCache

 Caching is a technique to store data in a faster storage (usually RAM) to serve future requests faster.
 Below are the common examples where cache is used:

 1) A processor cache is used to read data faster from main memory (RAM).
 2) Cache in RAM can be used to store part of disk data in RAM and serve future requests faster.
 3) Network responses can be cached in RAM to avoid too many network calls.
 However, cache store is usually not big enough to store the full data set. So we need to evict data from cache
 when cache becomes full. There are number of caching algorithms to implement cache eviction policy.
 LRU is very simple and a commonly used algorithm. Core concept of LRU algorithm is to evict oldest data
 (least recently accessed data) from cache to accommodate more data.
 */

class LinkedListNode{
    constructor(key, data){
        this.data = data;
        this.next = null;
        this.prev = null;
        this.key = key;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insert_at_head(key, data) {
        let newNode = this.LinkedListNode(key, data);
        if (!this.head) {
            this.tail = newnode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;

        return newNode;
    }

    insert_at_tail(key, value) {
        let newNode = this.LinkedListNode(key, data);
        this.insert_at_tail(newNode);
        return newNode;
    }

    insert_at_tail(node) {
        if (!this.tail) {
            this.tail = node;
            this.head = node;
            node.next = null;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            node.next = null;
        }

        this.size++;
        return node;
    }

    remove(node) {
        if (!node) {
            return;
        }

        if (node.prev != null) {
            node.prev.next = node.next;
        }

        if (node.next != null) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = this.head.next;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        this.size--;
        return node;
    }

    remove_head() {
        return this.remove(this.head);
    }

    remove_tail() {
        return this.remove(this.tail);
    }

}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.cache_vals = new LinkedList();
    }
    set(key, value) {
        if (this.cache[key]) {
            let node = this.cache[key];
            node.data = value;
            this.cache_vals.remove(node);
            this.cache_vals.insert_at_tail(node);
        } else {
            this.evict_if_needed();
            let node = new LinkedListNode(key, value);
            this.cache_vals.insert_at_tail(node);
            this.cache[key] = node;
        }
    }

    get(key) {
        if (this.cache[key]) {
            let node = this.cache[key];
            this.cache_vals.remove(node);
            this.cache_vals.insert_at_tail(node);
            return node.data;
        } else {
            return -1;
        }
    }

    evict_if_needed() {
        if (this.cache_vals.size >= this.capacity) {
            let node = this.cache_vals.remove_head();
            //this.cache.remove(node);
            delete this.cache[node.key];
        }
    }

    printcache() {
        let node = this.cache_vals.head;
        while (node) {
            console.log(node.key + " " + node.data + ", ");
            node = node.next;
        }
    }
}

//test
let cache = new LRUCache(4);

cache.set(1, 1);
cache.set(2, 2);
cache.set(3, 3);
cache.set(4, 4);

cache.printcache();

cache.set(5, 5);

console.log("after access 5")
cache.printcache();


cache.get(2);
console.log("after access 2")
cache.printcache();

cache.get(5);
cache.printcache();