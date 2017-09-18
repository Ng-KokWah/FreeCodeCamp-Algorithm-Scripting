/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 12 - Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Requirements/Sample Output:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function spinalCase(str) {
   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
   str = str.replace(/\s|_/g, '-');
   str = str.toLowerCase();
   return str;
}

spinalCase("AllThe-small Things");
