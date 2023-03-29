const view1 = document.querySelector("#view1");
view1.style.display = "none";
const view2 = document.querySelector("#view2");
view2.style.display = "none";
const view3 = document.querySelector("#view3");
view3.style.display = "flex";

console.log(view2);

const div = view2.querySelector("div");

const h2 = div.querySelector("h2");

// syntax :addEventListener(event,function,useCapture)

const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);

h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click",(event)=>{
//     console.log(event.target);
//     event.target.textContent="clicked";
// })

// h2.addEventListener("click", function (event) {
//   console.log(event.target);
//   event.target.textContent = "clicked";
// });

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readystate: Completed");
    initApp();
  }
});

// const initApp=()=>{
//     const div=view2.querySelector("div");
// const h2=div.querySelector("h2");
// const view=document.querySelector("#view2");

// view.addEventListener("click", (e) =>{
//     // e.stopPropagation(); true-out to in .false in to out
//     // e.target.style.backgroundColor="purple";
//     view.style.backgroundcolor="purple";
// },false
// );

// div.addEventListener("click", (e) =>{
//     // e.stopPropagation();
//     // e.target.style.backgroundColor="blue";
//     div.style.backgroundColor="blue";
// },false
// );

// h2.addEventListener("click", (e) =>{

//     // e.stopPropagation();
//     e.target.textContent="clicked";
// },false
// );
// }

// const initApp = () => {
//   const div = view2.querySelector("div");
//   const h2 = div.querySelector("h2");
//   const view = document.querySelector("#view2");

//   view.addEventListener(
//     "click",
//     (e) => {
//     //   view.classList.add("purple");
//     //   view.classList.remove("darkblue");
//     view.classList.toggle("purple");
//     view.classList.toggle("darkblue");
//     },
//     false
//   );

//   div.addEventListener(
//     "click",
//     (e) => {
//       // e.stopPropagation();
//       // e.target.style.backgroundColor="blue";
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );

//   h2.addEventListener(
//     "click",
//     (event) => {

//     const myText=event.target.textContent;

//     myText==="My 2nd View"?(event.target.textContent="Clicked"):(event.target.textContent="My 2nd View");

// }
// )

// const nav=document.querySelector("nav");
// nav.addEventListener("mouseover",(event)=>{
//     event.target.classList.add("height100");
// })

// nav.addEventListener("mouseout",(event)=>{
//     event.target.classList.remove("height100");
// })

// }

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
