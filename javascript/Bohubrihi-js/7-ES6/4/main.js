//object destructing


let person={
    firstName:"Eftekher",
    lastName:"Ali Efte", 
    dob:"06-07-2000"

}

// let fname=person.firstName;
// let lname=person.lastName;
// let dob=person.dob;


// console.log(fname, lname,dob);


//object exactly name

let {firstName:fname, lastName:lname,dob:dob}=person;


console.log(fname,lname,dob);




function display({firstName:fname, lastName:lname,dob:dob})
{
     fname=person.firstName;
    lname=person.lastName;
    dob=person.dob;
    console.log(fname,lname,dob);
}

display(person);