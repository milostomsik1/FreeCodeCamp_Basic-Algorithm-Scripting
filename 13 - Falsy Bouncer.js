function bouncer(arr) {
	return arr.filter(function(e) { //EASY SOLUTION: return arr.filter(Boolean);
		if (e === "" || e === null || e === 0 || Number.isNaN(e) || e === false || e === undefined) {
			return false;
		}
		return true;
	});
}

bouncer([7, "ate", "", false, 9]);


// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
