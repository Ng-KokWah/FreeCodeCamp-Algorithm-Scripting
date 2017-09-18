/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 1 - Reverse a String  

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.prototype.split()
Array.prototype.reverse()
Array.prototype.join()

Requirements/Sample Output:
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/

function reverseString(str) {
  var temp = str.split('');
  var rev = temp.reverse();
  
  var joined = rev.join();
  return joined.replace(/,/g , '');
}

reverseString("hello");