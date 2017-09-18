/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 7 - DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Requirements/Sample Output:
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 16 September 2017
*/

function pairElement(str) {
  var geneA = Array.from(str);
  var output = [];
  geneA.forEach(function(e) {
    if(e == 'G'){
     output.push([e,'C']);
    }
    else if(e == 'C'){
      output.push([e, 'G']);
    }
    else if(e == 'T'){
      output.push([e,'A']);
    }
    else if(e == 'A'){
      output.push([e,'T']);
    }
});
  return output;
}

pairElement("GCG");
