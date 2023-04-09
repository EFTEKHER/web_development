let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i;
//Meta characters

re = /^hello/; //Must start with ^

re = /hello$/; //end with $

re = /^Hello$/; //start and with hello
re=/^h.llo$/; //Matches any character
re=/h*llo/;//0 or more times
re=/he?llo/;//optional

re=/he?a?llo/;

re=/hello\?/;//escaping
str = `Hello world Hello`;
str=`hallo hello world`;
str=`hllo`;
console.log(re.exec(str));

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't matches ${re.source}`);
  }
}

reTest(re, str);
