/*
javascript object notation json

json is used to send data and receive data

json is a text format that is completely language independent 

Meaning JSON is used to send data and receive data in many different languages

.....not just in javascript 



*/

const myObj={
    name:"Dave", 
    hobbies:["eat","sleep","code"],
    hello:function(){
        console.log("Hello");
    }
}

console.log(myObj);

console.log(myObj.name);


myObj.hello();

console.log(typeof myObj);

const sendJSON=JSON.stringify(myObj);

console.log(sendJSON);


console.log(typeof sendJSON);


const receiveJSON=JSON.parse(sendJSON);

console.log(receiveJSON);
console.log(typeof receiveJSON);