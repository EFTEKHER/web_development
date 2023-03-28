const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.getElementById("view2");

console.log(view2);

view1.style.display = "flex";

view2.style.display = "none";

const views = document.getElementsByClassName("view");

console.log(views);

const sameViews = document.querySelectorAll(".view");

console.log(sameViews);

const divs = view1.querySelectorAll("div");

console.log(divs);

const someDivs = view1.getElementsByTagName("div");

console.log(someDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");

console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";

  // evenDivs[i].style.height="200px";

  // evenDivs[i].style.width="200px";
}

const navText = document.querySelector("nav h1");

console.log(navText);

navText.textContent = "Hello, world!";

const navbar = document.querySelector("nav");

navbar.innerHTML = `<h1>Hello world ! </h1>  <p> this should be align center </p> `;

console.log(navbar);

navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);

console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.children);

console.log(evenDivs[0].parentElement.lastChild);

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);

console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);

console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].previousSibling);

console.log(evenDivs[0].previousElementSibling);

console.log(evenDivs[0].nextElementSibling.nextElementSibling);


view1.style.display="none";
view2.style.display="flex";


view2.style.flexDirection="column";

view2.style.flexWrap="wrap";

view2.style.margin="10px";



while(view2.lastChild)
{
    view2.lastChild.remove();
}


const createDivs=(parent,iter)=>{
const newDiv=document.createElement("div");
newDiv.textContent=iter;
newDiv.style.backgroundColor="#000";
newDiv.style.width="100px";
newDiv.style.height="100px";
newDiv.style.margin="10px";
newDiv.style.display="flex";

newDiv.style.margin="10px";
newDiv.style.justifyContent="center";
newDiv.style.alignItems="center";
parent.append(newDiv);
}

// createDivs(view2,10);


for(let i=1;i<=12;i++)
{
    createDivs(view2,i);
}