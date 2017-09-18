/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 18 - Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Requirements/Sample Output:
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function steamrollArray(arr) {
    var output = [];
    arr.forEach(function(input) {
        output = output.concat(Array.isArray(input) ? steamrollArray(input) : input);
    });
    return output;
}

steamrollArray([1, [2], [3, [[4]]]]);
