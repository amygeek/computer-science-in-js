/**
 * Find non repeat elment
 * Take a string and return character that never repeats
 * if multiple uniques, then return only the first unique element
 */

 let findUniqueElm = (s) => {
     s = s.replace(/\s/g, '').toLowerCase();
     let map = new Map();
     for (let i = 0; i < s.length; i++) {
         let c = map.get(s[i]);
         if (c) {
             map.set(s[i], c + 1);
         } else {
             map.set(s[i], 1);
         }
     }

     for ( let [k, v] of map) {
         if ( v === 1) {
             return k;
         }
     }
 }

 console.log(findUniqueElm('abcdb'));
