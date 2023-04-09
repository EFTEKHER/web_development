


let fruits=["Apple", "Orange", "Grape"];

// let fruit1=fruits[0];
// let fruit2=fruits[1];
let [fruit1,fruit2,fruit3] =fruits;


console.log(fruit1 ,fruit2,fruit3);



let [a, ,b]=fruits;

console.log(a,b);

let x,y;
x=23 , y=9;
console.log(`before swapping ${x} to ${y}`);

[x,y]=[y,x];

console.log(`after swapping ${x} to ${y}`);