
function canHop(towers) {

 let lastHoppable = towers.length;
 let len = towers.length;
 for (let i = len - 1; i >= 0; i--) {

  let reach = i + towers[i];
  if (reach >= len || reach >= lastHoppable) {
    lastHoppable = i; 
  }
 }
 return lastHoppable == 0;
}
let arr = [4,2,0,0,2,0];
console.log(canHop(arr));  //true