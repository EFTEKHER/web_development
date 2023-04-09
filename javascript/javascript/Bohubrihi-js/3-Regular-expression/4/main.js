//shorthand character class
let re;
let str;
 re=/\w/; // word character -alpha numeric or _



 re=/\w+/ ; //one or more character

 re=/\d/;
 re=/\d+/;
 re=/\D/; //non digit
re=/\s/; //Match white space

re=/\S/; //Match non white space;

re=/Hello\b/; //word boundary

re=/\bHello\b/;

//assertion


re=/x(?=y)/; //Matches x only if x is before y








str="(*&v^y8)"
str="0000";
str="abcgdef"
str="99 00 78";

 function reTest(re, str) {
    if (re.test(str)) {
      console.log(`${str} matches ${re.source}`);
    } else {
      console.log(`${str} doesn't matches ${re.source}`);
    }
  }
  reTest(re, str);