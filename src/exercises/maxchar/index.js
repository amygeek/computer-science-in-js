// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = '';

  const map = {};
  for (let char of str) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  // for (let char in map) {
  //   if (map[char] > max) {
  //     max = map[char];
  //     maxChar = char;
  //   }
  // }

  maxChar = Object.keys(map).reduce((prev, curr) => {
    if (map[curr] > map[prev]) {
      return curr;
    } 
    return prev;
  });

  return maxChar;
}

console.log(maxChar('abcccccccd'));
console.log(maxChar('1231111'));

module.exports = maxChar;

