/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 2 - Factorialize a Number 

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Requirements/Sample Output:
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

/*
	Explanation of recursive call:
	recursive call occurs when one method calls itself in its own definition
	Basically: a method calls itself in the method itself
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/
function factorialize(num) {
  if(num == 0) {
    return 1; //base case
  }
  return num * factorialize(num-1); //recursive call
}

factorialize(5);