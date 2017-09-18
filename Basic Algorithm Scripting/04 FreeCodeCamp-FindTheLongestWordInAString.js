/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 4 - Find the Longest Word in a String 

Return the length of the longest word in the provided sentence.

Your response should be a number.

Requirements/Sample Output:
findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/


/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/

function findLongestWord(str) {
  var arrofthewholestring = str.split(' ');
  var longest = arrofthewholestring[0].length;
  for(var i=1; i<arrofthewholestring.length; i++) {
    if(arrofthewholestring[i].length > longest) {
      longest = arrofthewholestring[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
