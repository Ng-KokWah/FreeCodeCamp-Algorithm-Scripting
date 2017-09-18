/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 5 - Find the Longest Word in a String 

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Requirements/Sample Output:
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/

function titleCase(str) {
  var temp = str.toLowerCase();
  var sizeofstring = str.length;
  var arrofthestring = temp.split(' ');
  for(var i=0; i<arrofthestring.length; i++) {
    var uc = arrofthestring[i].charAt(0);
    arrofthestring[i] = arrofthestring[i].replace(uc, uc.toUpperCase());
  }
  return arrofthestring.join(' ');
}

titleCase("I'm a little tea pot");