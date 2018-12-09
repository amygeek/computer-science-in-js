/*
 You are working on developing a movie with video and want to devise an application to easily break up individual shots in a video into scenes.
 There is already an algorithm that breaks the video up into shots (short sequences from a particular camera angle) and labels them.

 Write a function which will partition a sequence of labels into minimal subsequences so that no labels appear in more than one subsequence.
 The output should be the length of each subsequence.

 Input:
 The input to the function/method consists of an argument - inputList, a list of characters representing the sequence of shots.

 Output:
 Return a list of integers representing the length of each scene, in the order in which it appears in the given sequence of shots.

 Example:
 input: [a,b,c]
 output: [1,1,1]
 Input:
 inputList = [a,b,a,b,c,b,a,c,a,d,e,f,e,g,d,e,h,i,j,h,k,l,i,j]
 Output:
 [9, 7, 8]
 Explanation:
 The correct partitioning is:
 a,b,a,b,c,b,a,c,a,/d,e,f,e,g,d,e,/h,i,j,h,k,l,i,j
 To ensure that no label appears in more than one subsequence, subsequences are as small as possible, and subsequences partition the sequence.
 The length of these subsequences are 9, 7 and 8.
 */
  
  class Interval {
    constructor(c, start) {
      this.c = c;
      this.start = start;
      this.end = start;
    }
  }
  
  let minCut = (list) => {
    let len = list.length;
    let map = new Map();
    let res = [];
  
    // loop through the list and
    for (let i = 0; i < len; i++) {
      // check if the character is in the map
      if (map.has(list[i])) {
        const c = map.get(list[i]);
        c.end = i;
      } else {
        map.set(list[i], new Interval(list[i], i));
      }
    }
  
    let prev;
    for (let cur of map.values()) {
      if (!prev) {
        prev = cur;
      } else if (prev.end < cur.start) {
        res.push((prev.end - prev.start) + 1);
        prev.start = cur.start;
        prev.end = cur.end;
      } else if (prev.end <= cur.end) {
        prev.end = cur.end;
      }
    }
    // push the last set
    res.push((prev.end - prev.start) + 1);
    return res;
  };
  
  let arr = ['a', 'b', 'a', 'b', 'c', 'b', 'a', 'c', 'a', 'd', 'e', 'f', 'e', 'g', 'd', 'e', 'h', 'i', 'j', 'h', 'k', 'l', 'i', 'j'];
  
  console.log(`["a","b","a","b","c","b","a","c","a","d","e","f","e","g","d","e","h","i","j","h","k","l","i","j"]
  [${minCut(arr)}]
  ****************** `);  // [9,7,8]
  
  arr = ['a', 'b', 'c', 'e', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'];
  console.log(`['a', 'b', 'c', 'e', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e']
  [${minCut(arr)}]
  ****************** `); // [12]
  
  arr = ['a', 'b', 'c', 'a'];
  console.log(`['a', 'b', 'c', 'a']
  [${minCut(arr)}]
  ****************** `);  // [4]
  
  arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'];
  console.log(`['a', 'b', 'c', 'd', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e']
  [${minCut(arr)}]
  ******************`);  // [5,7]
  
  arr = ['a', 'b', 'c', 'd'];
  console.log(`['a', 'b', 'c', 'd']
  [${minCut(arr)}]
  ******************`);  // [1,1,1,1]

  