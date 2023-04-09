//Adding Element to DOM;

//create Element

let olItem=document.createElement('li');

//add id and class

olItem.className="a new another-class";

olItem.id="new-element";


//add attribute

olItem.setAttribute('title','A title to a new class');

olItem.appendChild(document.createTextNode('javascript'));

document.querySelector('ol').appendChild(olItem);

console.log(olItem);

let ulItem=document.createElement('li');
let link=document.createElement('a');
link.appendChild(document.createTextNode('Instagram'));

link.setAttribute('href', 'http://www.instagram.com/');
ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);



//Replacing elements



let newHeading=document.createElement('h1');

newHeading.appendChild(document.createTextNode('h1  new heading'));

newHeading.className="sample-class";

let oldHeading=document.querySelector('h3');
let parent=document.querySelector('.container');
parent=oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);
console.log(newHeading);
console.log(oldHeading);

console.log(parent); 



//Removing an element

let listItems=document.querySelectorAll('li');

let list=document.querySelector('ul');

listItems[0].remove();


list.removeChild(listItems[5]);

console.log(list);

console.log(listItems);

list.classList.add('test');
list.classList.add('test-new');

 list.classList.remove("sample-class");

console.log(list);

console.log(listItems);

let val=list.hasAttribute('title');

list.setAttribute("title", "New title");
list.removeAttribute("title");

console.log(val);
console.log(list);
console.log(listItems);