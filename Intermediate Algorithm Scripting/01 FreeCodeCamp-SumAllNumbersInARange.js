/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 1 - Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Requirements/Sample Output:
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function sumAll(arr) {
  var largest = Math.max(arr[0], arr[1]);
  var smallest = Math.min(arr[0], arr[1]);
  var temp = [];
  
  for(var i=smallest; i<=largest; i++) {
    temp.push(i);
  }
  
  var result = temp.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  
  return result;
}

sumAll([4, 1]);