import singlyLinkedList from '../src/js/linkedlist/SinglyLinkedList';

describe('Singly Linked List', () => {

    let linkedList = null;

    beforeEach(() => {
        linkedList = new singlyLinkedList();
        linkedList.insert(3);
        linkedList.insert(2);
        linkedList.insert(8);
        linkedList.insert(7);
        linkedList.insert(1);
        linkedList.insert(18);
    });

    it('should print linked list iteratively', () => {
        let printStr = linkedList.print();
        expect(printStr).toEqual('3 -> 2 -> 8 -> 7 -> 1 -> 18 -> null');
    });

    it('should reverse linked list iteratively', () => {
        linkedList.reverseIteratively();
        let printStr = linkedList.print();
        expect(printStr).toEqual('18 -> 1 -> 7 -> 8 -> 2 -> 3 -> null');
        let len = linkedList.length();
        expect(len).toEqual(6);
    });

    it('should reverse linked list recursively', () => {
        let node = linkedList.reverseRecursively(linkedList.head);
        linkedList.head = node;
        let printStr = linkedList.print();
        expect(printStr).toEqual("18 -> 1 -> 7 -> 8 -> 2 -> 3 -> null");

    });

    it('should remove the item by value from linked list', () => {
        linkedList.removeByVal(1);
        let printStr = linkedList.print();
        expect(printStr).toEqual('3 -> 2 -> 8 -> 7 -> 18 -> null');
        let len = linkedList.length();
        expect(len).toEqual(5);

    });

    it('should return -1 when deleting not-found item in linked list', () => {
        let item = linkedList.removeByVal(100);
        expect(item).toBe(-1);
    });

    it('should remove the item by index from linked list', () => {
        linkedList.removeByIndex(2);
        let printStr = linkedList.print();
        expect(printStr).toEqual('3 -> 2 -> 7 -> 1 -> 18 -> null');
        let len = linkedList.length();
        expect(len).toEqual(5);
    });
});