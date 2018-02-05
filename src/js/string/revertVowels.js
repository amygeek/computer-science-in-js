//Provide a function that takes a string and reverses all the vowels and leaves everything else in place. 

// Google -> Geoglo
// Facebook -> Focobeak

let str = "Facebook";
let i = 0;
let j = str.length - 1;

let swap = ( str, i, j) => {
	let temp = str[i];
	str[i] = str[j];
	str[j] = temp;
}
let revert = ( str ) => {
	str = str.split("");
	while ( i < j ) {
 	if ( (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") && (str[j] == "a" || str[j] == "e" || str[j] == "i" || str[j] == "o" || str[j] == "u")  ){
	swap(str, i, j);
		i++;
		j--;

} else if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" || str[i] !== "o" || str[i] !== "u")  {
	i++;
} else if (str[j] !== "a" || str[j] !== "e" || str[j] !== "i" || str[j] !== "o" || str[j] !== "u")  {
	j--;
}
}
	return str.join("");
}

console.log(revert( str ))
// vowels =[a, e, i, o, u];
// For example: 
//   "united states" -> "enated stitus" 
// setats detinu
// enated stitus
