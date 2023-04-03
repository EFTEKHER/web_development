// document.getElementById("")

//Getting an element
let val;

val=document.getElementById('document-title');


console.log(val);


let a=document.getElementById('document-title').id;

console.log(a);

let b=document.getElementById('document-title').className;

console.log(b);


//changing style


document.getElementById('document-title').style.background="#333";

document.getElementById('document-title').style.color="#fff";


document.getElementById('document-title').style.padding='10px';
document.getElementById('document-title').style.margin='10px';

document.getElementById('document-title').style.display='block';

//changing content

document.getElementById('document-title').textContent='New Title';

document.getElementById('document-title').innerText='Again New Title';


document.getElementById('document-title').innerHTML="<i> again again new Title </i> ";

let d=document.getElementById('document-title');


val.innerText="Ha Ha Ha";

console.log(val);


//document Query selector


let x=document.querySelector('#document-title');
console.log(x);

let c=document.querySelector('.title-class');

console.log(c);

let z=document.querySelector('h3');

console.log(c);

let e=document.querySelector('ol');
console.log(e);
let f=document.querySelector('ol li');
f.style.background='red';
f.style.color='white';
console.log(f);

let g=document.querySelector('li:last-child');

g.style.background='black';
g.style.color='white';

let h=document.querySelector('li:nth-child(2)');

h.style.background='darkviolet';
h.style.color='white';