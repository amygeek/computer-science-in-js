let reverseChar = (s) => {
    s = s.split('');
    let n = s.length;
    if (n === 0) {
      return s;
    }
  
    let i = 0;
    let j = n-1;
  
    while (i < j) {
      let charCodeI = s[i].charCodeAt(0);
      let charCodeJ = s[j].charCodeAt(0);
  
      if (isChar(charCodeI) && isChar(charCodeJ)) {
        swap(s, i, j);
        i++;
        j--;
      } else if (isNotChar(charCodeI)) {
        i++;
      } else if (isNotChar(charCodeJ)) {
        j--;
      }     
    }
    return s.join('');
}
let swap = (s, i, j) => {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}

let isChar = (charCode) => {
    return charCode >= 65 && charCode <= 90;
}

let isNotChar = (charCode) => {
    return charCode < 65 || charCode > 90;
}

console.log(reverseChar('AB@#CD!E'));  // "ED@#CB!A"
    
