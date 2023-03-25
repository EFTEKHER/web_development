// alert("Hello world");

//user input
// let myBoolean = confirm("ok===True \n cancel===False");
// console.log(myBoolean);

let name = prompt("please Enter your name? ");
if (name) {
  console.log(name);
  console.log(name.length);
  console.log(name.trim().length);
} else {
  console.log("You didn't enter your name ");
}
