/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 16 - Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Requirements/Sample Output:
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
