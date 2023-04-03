

//Examples


let re;

let str;

//postal code

//4700,1230


re=/^[0-9]{4}$/;

str="4000";

console.log(re.test(str));


//phone number

//01798887910,01829329907

// re=/^(\+88)?01[0-9]{9}$/;

re=/^(\+)?(88)?01[0-9]{9}$/;

str="+8801798887910";

console.log(re.test(str));

//email address

//bohubrihi.learn@edu.com.bd

// re=/^([a-zA-Z0-9]\.?)+[^\.]@$([a-zA-Z0-9]\.?)+[^\.]$/;
re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
str="bohubrihi.learn@edu.com.bd";


console.log(re.test(str));