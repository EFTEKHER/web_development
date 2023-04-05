//iterator

let iterable="Hello World";
iterable=[1,2,3,4,5,6,7,8,9]

//symbol iterator

let iter= iterable[Symbol.iterator]();
console.log(iter);

let names=["Rahim","karim","Rony",]
// console.log(iter.next().value);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// console.log(iter.next());

//custom iterator

function customIterator(arr) {
let i=0;
return{
    next: function()
    {
        return i<Array.length?{value: arr[i++],done:false}:{value:true};
    }
}
}

let member=customIterator(names);
console.log(member.next().value);

//generators


function* getFunction()
{
    yield 1;
    yield "Rahim";
    yield  4;
    yield "karim";
    yield "Hello world"

}

let iter1=getFunction();

console.log(iter1.next().value);
