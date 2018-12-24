/**
 * Given head nodes of two linked lists that may or may not intersect,
 * find out if they intersect and return the point of intersection; return null otherwise.
 * In below example both lists don't intersect so Intersect should return NULL.
 * However, in below example both lists intersect at the node with data 12, so we should return a pointer to node 12.
 * head1 -> 29 -> 23 -> 82 -> 11 -> 12 -> 27 -> null
 * head1 -> 13 -> 4 -> 12 -> 27 -> null
 * Runtime Complexity
    Linear, O(m + n).
    where m is the length of first linked list and n is the length of second linked list.

 * Memory Complexity
 Constant, O(1).
 *
 * @param head1
 * @param head2
 * @returns {*}
 */
let intersect = function(head1, head2) {
  let list1node = null;;
  let list1len = getLen(head1);
  let list2node = null;;
  let list2len = getLen(head2);

  let lenDiff = 0;
  if (list1len >= list2len) {
    lenDiff = list1len - list2len;
    list1node = head1;
    list2node = head2;
  } else {
    lenDiff = list2len - list1len;
    list1node = head2;
    list2node = head1;
  }

  while (lenDiff > 0) {
    list1node = list1node.next;
    lenDiff--;
  }

  while (list1node) {
    if (list1node === list2node) {
      return list1node;
    }
    list1node = list1node.next;
    list2node = list2node.next;
  }

  return null;
};

let getLen = function(head) {
  let len = 0;
  while (head) {
    head = head.next;
    len++;
  }
  
  return len;
};

let intersect2 = function(head1, head2) {
  
  let m = getLen(head1);
  let n = getLen(head2);
  
  if (m > n) {
    while(m > n) {
      head1 = head1.next;
    }
  } else {
    while (n > m) {
      head2 = head2.next;
    }
  }
  while(head1) {
    if (head1 === head2) {
      return head1;
    }
    head1 = head1.next;
    head2 = head2.next;  
  }
  return null;
};
