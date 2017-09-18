/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 15 - Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Requirements/Sample Output:
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/


/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  var calculation = 0;
  var scm = min * max;

  while (calculation === 0) {
    for (var i = min; i <= max; i++) {
      if (scm % i !== 0) {
        scm += max;
        calculation = 0;
        break;
      }
      else {
        calculation = 1;
      }
    }
  }

  return scm;
}


smallestCommons([1,5]);
