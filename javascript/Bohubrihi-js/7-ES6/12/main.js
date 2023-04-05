//Maps
let myMap=new Map(
    [
        ["first key",10],
        ["second key","Bohubrihi"],
        ["third key",20]
    ]
);
//add
myMap.set("fourth key","Helo world");


console.log(myMap);

console.log(myMap.get("third key"));
console.log(myMap.has("third key"));

console.log(myMap.size);

//iterate

for(let x of myMap)
{
    console.log(x);
}

for(let [x,y] of myMap)
{
    console.log(x,y);
}


for(let x of myMap)
{
    console.log(x);
}

for(let x of myMap.keys())
{
    console.log(x);
}

for(let x of myMap.entries())
{
    console.log(x);
}

for(let x of myMap.values())
{
    console.log(x);
}



myMap.forEach((x,y)=>{
    console.log(x,y);
})

//convert map to array

let arr=Array.from(myMap);
console.log(arr);

let arr1=Array.from(myMap.keys());

console.log(arr1);


let arr2=Array.from(myMap.values());

console.log(arr2);