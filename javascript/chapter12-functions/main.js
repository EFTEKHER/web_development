function sum(a, b) {
  return a + b;
}

console.log(sum(5, 6));

function getUserNameFromEmail( email) {
return email.slice(0,String(email).indexOf("@"));
}

console.log(getUserNameFromEmail("eftekherali2000@gmail.com"));


const toPropercase=(name)=>{
    return String(name).charAt(0).toUpperCase()+String(name).slice(1).toLowerCase();
}
console.log(toPropercase("eFte"));