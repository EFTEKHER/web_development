//traverse the DoM

let  val;

let list=document.querySelector('ul');


let listItem=document.querySelector('ul li');

val=listItem;


//get the childnode

val=list.childNodes[0];
val=list.childNodes[1].nodeName;
val=list.childNodes[1].nodeType;

/*
1-Element
2- Attributes
3- Text nodes
8-comment
9-Document Itself
10-DocType

*/
let m=document.querySelector('ul');
 val=list.children;
 m.children[0].textContent="Hello!";

 val=m.children[1].children[0].href;
console.log(val);

val=list.firstChild;
val=list.firstElementChild;

val=list.lastChild;
val=list.lastElementChild;
console.log(val);

val =list.childElementCount;
console.log(val);


val=listItem;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;
val=listItem.nextSibling.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;
console.log(val);



val=document.querySelector('ul li:last-child');

val=val.previousSibling;
console.log(val);
val=val.previousElementSibling;
console.log(val);