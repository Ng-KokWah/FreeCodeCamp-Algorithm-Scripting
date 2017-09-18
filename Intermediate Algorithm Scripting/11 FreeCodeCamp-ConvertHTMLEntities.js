/*
FreeCodeCamp
Intermediate Algorithm Scripting
Challenge 11 - Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Requirements/Sample Output:
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/

/*
	Coded by: Ng Kok Wah
	Date Coded: 17 September 2017
*/

function convertHTML(str) {
  var temp = str.split('');
  var output = [];
  for(var i=0; i<temp.length; i++) {
    if(temp[i].includes("&")) {
      output.push("&amp;");
    }
    else if(temp[i].includes("<")) {
      output.push("&lt;");
    }
    else if(temp[i].includes(">")) {
      output.push("&gt;");
    }
    else if(temp[i].includes("\"")) {
      output.push("&quot;");
    }
    else if(temp[i].includes("\'")) {
      output.push("&apos;");
    }
    else {
      output.push(temp[i]);
    }
  }
  return output.join('');
}

convertHTML("<>");