/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 8 - Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Requirements/Sample Output:
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function fearNotLetter(str) {
  var output = undefined;
  for (var i=0;i<str.length;i++) {
    if (str.charCodeAt(i+1)-str.charCodeAt(i)>1) {
      output = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
  return output;
}

fearNotLetter("abce");