//Modules

// import playguitar  from "./guitar.js";

// // import { shredding,plucking } from "./guitar.js";
// import { shredding as shred ,plucking as fingerpicking } from "./guitar.js";

// console.log(playguitar());

// console.log(shred());

// console.log(fingerpicking());


import * as Guitars from "./guitar.js";
import User from "./user.js";
const me = new User("email@email.com","Efte");
console.log(Guitars.default());

console.log(Guitars.shredding());

console.log(Guitars.plucking());


console.log(me);

console.log(me.greeting());
