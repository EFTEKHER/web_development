// let val;
// val=this;

// console.log(this);

// let val=window;
// console.log(window.document);

let val=window;

let a=window.document;

console.log(a);
let b=document.all;

console.log(b);

let c=document.all.length;

console.log(c);

let d=document.head;

console.log(d);

let e=document.doctype;

console.log(e);

let f= document.domain;

console.log(f);

let g=document.URL;

console.log(g);

let h=document.characterSet;
console.log(h);


let i=document.contentType;

console.log(i);

let j=document.forms;


console.log(j);


let k=document.forms[0].method;

console.log(k);

let l=document.links;

console.log(l);

let m=document.links[0].href;

console.log(m);


let n=document.links[0].className;

console.log(n);

let o=document.links[0].classList;

console.log(o);

let p=document.images;

console.log(p);

let q=document.scripts[0];

console.log(q);

let r=document.scripts[0].src;
console.log(r);

let s=document.scripts[0].getAttribute('src');

console.log(s);

links=document.links;
let linkArr=Array.from(links);
linkArr.forEach(function(link){
console.log(link);
})


