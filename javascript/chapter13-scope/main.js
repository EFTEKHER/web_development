//var,let and const 


//global scope

var x=1;
let y=2;
const z=3;

//local scope
{
    let y=4;
    console.log(y);
}

//local scope

function myFun()
{
    const z=5;
    console.log(z);
}
