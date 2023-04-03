
//https://jsonlint.com
// String
// Numberobject(JSONObject)
// Array
// Boolean
// null
//Json doesnot support undefined,date,function

var person={
    name:"Rahim",
    age:27,
    hometown:"kishoregonj",
    married:false,
    dob:2002-06-07,
    test_null:null, 
    test_undefined:undefined,
    greet:function()
    {
        console.log(`Hello ${this.name}`);
    }
}

var person_json=JSON.stringify(person);

console.log(person_json);




// JSON.stringify()-->Js object to JSON string
// JSON.parse()-->JSON string to JS object


var person1={
    "name":"Efte",
    "age":25,
    "hometown":"Dhaka",
    "married":false,
}

var person1_json=JSON.stringify(person1);

console.log(person1_json);

var person2=JSON.parse(person1_json);

console.log(person2);