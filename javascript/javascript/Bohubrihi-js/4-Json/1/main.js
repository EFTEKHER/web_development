var student_json={
    "name":"Rahim", 
    "age":26,
    "hometown":"Dhaka",
}

var student={
    name:"Rahim",
    age:27,
    hometown:"kishoregonj",
}


var s_json=JSON.stringify(student);
console.log(s_json);

var studet_new=JSON.parse(s_json);

console.log(studet_new);