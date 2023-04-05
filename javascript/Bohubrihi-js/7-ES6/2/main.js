//define a function

// function hello()
// {
//     console.log("Hello world");
// }


let hello=(name,dob)=>
{
   console.log(name,dob);
}

hello("Eftekher Ali Efte","08-26-1988");


let getsquare =num=>num*num;

console.log(getsquare(4));

//callback

numbers=[1,2,3,4,5,6,7,8,9];


numbers.forEach(function(item){
console.log(item);
})
let printAll=(item)=>{
    console.log(item);
}
numbers.forEach(printAll);


let squareNum=numbers.map(function(item){
return item*item;
})

console.log(squareNum);


function squareAll(item)
{
    return item*item;

}

let squareNum1=numbers.map(squareAll);

console.log(squareNum1);