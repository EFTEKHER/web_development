let re;
let str;

str = "hello";

//character set using Brackets
re = /h[eai]llo/i; //Must be one of them inside brackets

re=/[^ha]ello/; //anything except those inside brackets


re=/^[ha]ello/;//must start with h or a
re=/[a-z]ello/; 
re=/^[A-Z]ello/;//First letter must be upper case
re=/[A-Za-z]ello/;
re=/[1-9]ello/;

re=/^[0-9]ello/;//first

re=/[^0-9]ello/; //Not digit

re=/[0-9][0-9]ello///two digit
re=/^[0-9][0-9][0-9]ello/ //three digit

//Braces {}=Quantifier
re=/el{2}o/;//Must occur exactly 3 times
re=/el{3}o/;

re=/hel{2,5}o/;//Range

re=/hel{2,}o/; //at least 2 times

//parenthesis ()--->Grouping
re=/^([0-9]){3}/


//Bangladeshi Phone number

re=/^01[0-9]{9}$/;

re=/^\+8801[0-9]$/;

re=/^([0-9]x){3}/;

// str = "heallo";
// str="4ello";
// str="tello";

// str="97ello";

// str="helllo";

str="333";
str="01798887910";
str="+8801798887910";

str="2x3x7x";
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't matches ${re.source}`);
  }
}

reTest(re, str);
