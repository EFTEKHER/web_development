const band={
    vocals:"Robert Plant", 
    guitar:"jimmy page", 
    bass:"John paul jones", 
    drums:"John Bonham",
}


console.log(Object.keys(band));
console.log(Object.values(band));

delete band.drums;

console.log(band.hasOwnProperty("drums"));

for(let x in band)
{
    console.log(`on ${x}, it's ${band[x]}`);
}