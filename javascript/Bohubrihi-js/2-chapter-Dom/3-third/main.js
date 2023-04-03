//Multiselector

// document.gerElementByclassName()

let list = document.getElementsByClassName("sample-class");

list[0].style.background = "red";

list[0].style.color = "white";
list[0].style.padding = "10px";
list[0].style.padding = "10px";
list[0].textContent = "Hello world !";

console.log(list[0]);

// document.getElementsByTagName()

list = document.getElementsByTagName("li");

console.log(list);

list = document.querySelector("ol").getElementsByTagName("li");
console.log(list[3]);

let lis = Array.from(list);

lis.forEach(function (item) {
  console.log(item);
});

// document.querySelectorAll();

//Document.querySelectorAll()
//id->#
//class ->.

list = document.querySelectorAll('ol li');

list.forEach(function(item){
console.log(item);
})

console.log(list);


let liOdd=document.querySelectorAll('li:nth-child(odd)');

let liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (items) {
    items.style.background="grey";
    
})
liEven.forEach(function (items) {
    items.style.background="pink";
    
})