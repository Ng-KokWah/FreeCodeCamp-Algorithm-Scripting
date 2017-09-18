/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 8 - Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Requirements/Sample Output:
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/

function repeatStringNumTimes(str, num) {
  var temp = "";
  if(num >= 0) {
    for(var i=0; i<num; i++) {
      temp += str;
    }
  }
  else {
    temp = "";
  }
  return temp;
}

repeatStringNumTimes("*", 3);
