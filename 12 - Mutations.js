function mutation(arr) {
	arr[0] = arr[0].toLowerCase();
	arr[1] = arr[1].toLowerCase().split("");
	retVal = 0;

	arr[1].forEach(function(e) {
		if (arr[0].indexOf(e) >= 0) {
			retVal++;
		}
	});

	if (retVal === arr[1].length) {
		return true;
	} else {
		return false;
	}
}

mutation(["hello", "hey"]);


// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
//
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
