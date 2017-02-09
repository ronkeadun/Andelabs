//Simple FizzBuzz program with numbers 1 to 20
function fizzBuzz(){
	for (var i = 1; i <= 20; i++){
		if ((i % 3 === 0) && (i % 5 === 0))
			return ("FizzBuzz");
		else if (i % 3 === 0)
			return ("Fizz");
		else if (i % 5 === 0)
			return ("Buzz");
	}
}