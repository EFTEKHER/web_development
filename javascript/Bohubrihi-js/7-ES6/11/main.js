let mySet= new Set([1,2,3,4,5,4]);
mySet.add("Hello");
// mySet.clear();
mySet.delete("Hello");
console.log(mySet);
mySet.add("Hello");

console.log(mySet.has(4));

//iteration

for(x of mySet)
{
    console.log(x);
}

let iter=mySet.entries();

console.log(iter);

console.log(iter.next());

console.log(iter.next());
for(x of mySet.values())
{
    console.log(x);
}
for(x of mySet.entries())
{
    console.log(x);
}

let iter2=[... mySet.entries()]

console.log(iter2);


mySet.forEach(value=>console.log(value));