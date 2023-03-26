const band={
    vocals:"Robert Plant", 
    guitar:"jimmy page", 
    bass:"John paul jones", 
    drums:"John Bonham",
}

//destructing objects

const {guitar:myVariable,bass:myBass }=band;
console.log(myVariable);
console.log(myBass);


const {vocals,guitar,bass,drums}=band;
console.log(guitar);
console.log(vocals);


function sings({vocals}){
    return `${vocals} sings!`;
}

console.log(sings(band));