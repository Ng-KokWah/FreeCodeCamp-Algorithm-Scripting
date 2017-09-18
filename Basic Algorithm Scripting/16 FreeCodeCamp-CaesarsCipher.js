/*
FreeCodeCamp 
Basic Algorithm Scripting
Challenge 16 - Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Requirements/Sample Output:
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function rot13(str) { // LBH QVQ VG!
  var temp;
  var compute;
  var output = [];
  var joined;
  
  for(var i=0; i<str.length; i++) {
    temp = str.charCodeAt(i);
    
    compute = temp - 13;
    if(compute < 65) {
      if ((temp >= 65) && (temp <= 90)) {
          compute = 90 + temp - 65 - 12;
          output.push(String.fromCharCode(compute));
      } 
      else {
          output.push(String.fromCharCode(temp));
      }
    }
    else {
          compute = temp - 13;
          output.push(String.fromCharCode(compute));
    }
  }
  
  joined = output.join();
  return joined.replace(/,/g , '');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");