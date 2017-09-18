/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 10 - Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Requirements/Sample Output:
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var sliced;
  var compute = arr.length / size;
  if(compute <= 2) {
    sliced = arr.slice(0, size);
  temp.push(sliced);
  sliced = arr.slice(size, size+size);
   temp.push(sliced);
  }
  else if(compute > 2 && compute <= 3) {
    sliced = arr.slice(0, size);
  temp.push(sliced);
  sliced = arr.slice(size, size+size);
   temp.push(sliced);
    sliced = arr.slice(size+size, arr.length);
   temp.push(sliced);
  }
  else {
  sliced = arr.slice(0, size);
  temp.push(sliced);
  sliced = arr.slice(size, size+size);
   temp.push(sliced);
    sliced = arr.slice(size+size, size+size+size);
   temp.push(sliced);
    sliced = arr.slice(size+size+size, size+size+size+size);
   temp.push(sliced);
    sliced = arr.slice(size+size+size+size, arr.length);
   temp.push(sliced);
  }
  return temp;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
