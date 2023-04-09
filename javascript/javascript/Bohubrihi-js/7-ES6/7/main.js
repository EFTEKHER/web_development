//Rest operator

let fruits=["apple","orange","mango","jackfruit"];


let[first,second,...third]=fruits;

console.log(first);

console.log(second);

console.log(third);


let person={
    fname:"simanta",
    laname:"khan",
    dob:"08-06-2000"
}

let{fname,...lname}=person;
console.log(lname);


let  test=(name,...numbers)=>{
    console.log(name);
    console.log(numbers);
}

test("simanta",67,3,33);


function  Person(age,name)
{
    this.age=age;
    this.name=name;
}

Person.prototype.getName=function()
{
console.log(this.name);    
}

let person1=new Person(25,"Rahim");

console.log(person1);
person1.getName();
