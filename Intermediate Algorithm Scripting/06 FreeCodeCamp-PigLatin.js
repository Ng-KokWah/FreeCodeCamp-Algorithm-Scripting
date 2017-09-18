/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 6 - Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Requirements/Sample Output:
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".

*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function translatePigLatin(str) {
  var arr = str.split('');
  var conditions = ["a", "e", "i", "o", "u"];
  var result = [];
  var firstchar = str.charAt(0);
  var firstcharisvowel;
 var regex = /[aeiou]/gi;
  
  for(var i=0; i<conditions.length; i++) {
    if(firstchar == conditions[i]) {
      firstcharisvowel = true;
    } 
  }
  
  if(firstcharisvowel == true) {
    return str + "way";
  }
  else {
    var check = str.indexOf(str.match(regex)[0]);
    return str.substr(check) + str.substr(0, check) + 'ay';
  }
  
}

translatePigLatin("glove");
