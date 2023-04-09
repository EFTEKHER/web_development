//Regular Expression

//pattern match technique

let re;
let str;

re=/hello/;
re=/Hello/;
re=/hello/i; //i case insensitive 
console.log(re);

console.log(re.source);

str="Hello, world!";
str="Again Hello World"

//exec() -> Return result in an array or null

let result =re.exec(str);
console.log(result);


//test()->true or false

result=re.test(str);
console.log(result);

//match() Return result in an array or null

result=str.match(re);
console.log(result);

//search() -Returns index of the first match or -1

result=str.search(re);

console.log(result);


//replace() -Returns new string

str="Again Hello World Hello";

let newstr= str.replace(re,"Hi");

console.log(result);

console.log(str);
console.log(re.source);

console.log(newstr);


