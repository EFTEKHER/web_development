const myArray = [];
myArray.push("Dave");
myArray.push(101);
myArray.push(102);
myArray[3] = "Efte";
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.splice(1,0,42);
console.log(myArray);

//Arrays
const myArray1=['A','B','C','D','E'];

const newArray=myArray1.slice(2);
const arr1=myArray1.slice(2,5);
console.log(newArray);
console.log(arr1);

const myArrayA=["A","B","C","D","E"];
const myArrayB=["F","G","H","I","J","K","L","M","N"];
const newString =myArray1.join();
console.log(newString);
const A=newString.split(",");
console.log(A);

const newArray2=myArrayA.concat(myArrayB);

console.log(newArray2);


const newArray3=[...myArrayA,...myArrayB];
console.log(newArray3);


const equipshelfA=["baseball", "football","volleyball"];
const equipshelfB=["basketball","golf balls","tennis balls"];

const equipDept=[equipshelfA,equipshelfB];
console.log(equipDept[0][1]);