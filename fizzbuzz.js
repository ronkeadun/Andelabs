//Simple FizzBuzz program with numbers 1 to 20

for (var i = 1; i <= 20; i++){
	if ((i % 3 === 0) && (i % 5 === 0))
		console.log("FizzBuzz");
	else if (i % 3 === 0)
		console.log ("Fizz");
	else if (i % 5 === 0)
		console.log("Buzz");
}