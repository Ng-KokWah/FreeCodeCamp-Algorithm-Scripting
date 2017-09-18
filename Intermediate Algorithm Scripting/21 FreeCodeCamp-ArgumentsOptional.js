/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 21 - Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Requirements/Sample Output:
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/
function addTogether(num) {
   var output; 
   var compute;
   
  if (arguments.length == 1) {
    if (typeof(arguments[0]) === 'number' ) {
      compute = function (e) {
        if (typeof(e) === 'number') {
          output = num + e;
          return output;
        } 
        else {
          return undefined; 
        }
       
    }; 
    return compute;
    } 
    else {
      return undefined; 
    }
  } 
  else {
      if (typeof(arguments[1]) === 'number') {
        return arguments[0] + arguments[1];
      } else {
        return undefined; 
      }
       
  }
}

addTogether(2, 3);
