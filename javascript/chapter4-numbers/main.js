const myNumber=42;
const myFloat=8.0856;
console.log(myNumber);
console.log(myFloat);
const x="42";
console.log(myNumber==myFloat);
console.log(Number("Dave"));
console.log(Number(undefined));
console.log(Number(true));

console.log(Number.parseFloat(x));
console.log(myFloat.toFixed(2));

console.log(typeof Number.parseFloat(x));

console.log(Number.parseFloat("4.2567abc").toFixed(3).toString());

console.log(Number,isNaN("Dave"));