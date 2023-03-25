//Loops
let myNumber = 0;

while (myNumber < 10) {
  console.log(myNumber);
  myNumber++;
}
let n = "Eftekher Ali Efte";
for (let i = 0; i < n.length; i++) {
  console.log(n.charAt(i));
}
let name = "Dave";

let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (myLetter == "v") break;
  counter++;
}
