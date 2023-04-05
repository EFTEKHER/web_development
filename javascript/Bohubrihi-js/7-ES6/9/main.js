//promises
//successfully->resolve

// Failed -->reject

let prom = new Promise((resolve, reject) => {
  let a;

  setTimeout(() => {
    a = 1 + 1;
    if (a == 2) {
        resolve("success");
      } else {
        reject("Failed");
      }
  }, 4000);
  
});
console.log(`i am after promise`);
prom
  .then((message) => {
    console.log(`I am from then ${message}`);
  })
  .catch((err) => {
    console.log(`I am from catch ${err}`);
  });

console.log(`i am after promise `);
//Example : Image file
