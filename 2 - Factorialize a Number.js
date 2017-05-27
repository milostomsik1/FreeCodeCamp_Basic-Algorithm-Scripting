function factorialize(num) {
	var rezultat = 1; //uzima se u obzir da je faktorijal broja 0 uvek 1;
		for (var i = num; i > 0; i--) {
			rezultat *= i;
		}
	return rezultat;
}
factorialize(5);


// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.
