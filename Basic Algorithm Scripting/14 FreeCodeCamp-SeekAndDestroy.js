/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 14 - Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Requirements/Sample Output:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function destroyer(arr) {
  var tobesliced = arr.slice.call(arguments).slice(1);
  
  return arr.filter(function(e) {
    for (var i = 0; i < tobesliced.length; i++) {
      if (tobesliced[i] === e) {
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);