/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 7 - Confirm the Ending 

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Requirements/Sample Output:
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 15 September 2017
*/

function confirmEnding(str, target) {
  var posoftarget = str.lastIndexOf(target);
  var sizeofstring = str.length;
  var sizeoftarget = target.length;
  
  var sub = str.substr(sizeofstring-sizeoftarget, sizeoftarget);
  if(sub == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
