//ES6-EMASCRIPT
//var let const


// var a=10;

// a=a+7;
// var a;
// console.log(a);

// let b=6;//once declare don't reassign
// b=b*67;
// // let b;
// console.log(b);

// const c=7;


//Global Scope

var a=1;
let b=2;
const c=3;

console.log(`Global Scope: `,a,b,c);


function test()
{
    var a=4;
let b=5;
const c=6;

console.log(`Function scope: `,a,b,c);
}

test();
console.log(`Global Scope: `,a,b,c);

if(true)
{
    var a=7;
    let b=8;
    const c=9;
    console.log(`If scope:`,a,b,c);
}
console.log(`Global Scope: `,a,b,c);