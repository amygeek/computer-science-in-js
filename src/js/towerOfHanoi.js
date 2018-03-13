
function towerOfHanoi (n, from, spare, to){
	if(n == 1){
		console.log ( from +  " -> " + to);
	}else{
		towerOfHanoi(n-1, from, to, spare);
		towerOfHanoi(1, from, spare, to);
		towerOfHanoi(n-1, spare, from, to);
	}
}

console.log( towerOfHanoi(3, 'from', 'spare', 'to'));