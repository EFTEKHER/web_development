//spread operator ...

let str="eftekher";

let newStr=[...str];


console.log(newStr);



let fruit1=["Apple","pine-apple","Mango"]
let fruit2=["orange","Grape"]
let newfruit="jackfruit";

let newArr=[...fruit1,...fruit2,newfruit];


console.log(newArr);


///spread on object (ES8)


let person={
    fname:"eftekher",
    lname:"ali efte",
}

let newPerson={...person,dob:"07-06-2000"};

console.log(newPerson);


let numbers=[23,1,12,45, 0,-1];

console.log(Math.max(...numbers));

let person1=["Efte","Kher"];


let test=(fname,lname)=>{
    console.log(`Hello ${fname} ${lname}`);
}

// test(person1[0],person1[1]);

test(...person1);