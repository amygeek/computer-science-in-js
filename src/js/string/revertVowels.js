//Provide a function that takes a string and reverses all the vowels and leaves everything else in place.

let swap = ( str, i, j) => {
	let temp = str[i];
	str[i] = str[j];
	str[j] = temp;
}

let isVowel = ( c) => {
	return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

let reverseVowels = ( str )  => {
	str = str.split("");
	let i = 0;
	let j = str.length - 1;

	while ( i < j ) {
		if ( isVowel(str[i]) && isVowel(str[j])) {
			swap( str, i, j);
			i++;
			j--;

		} else if ( !isVowel(str[i])) {
			i++;
		} else if ( !isVowel(str[j]) ){
			j--;
		}
	}
	return str.join("");
}

// Google -> Geoglo
// Facebook -> Focobeak
// united states -> enated stitus

let str = "Facebook";

console.log(reverseVowels(str));