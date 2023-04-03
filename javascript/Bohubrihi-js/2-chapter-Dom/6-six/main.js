function message() {
  console.log("mouse over button");
}

function message1(e) {
  let val = e;
  val = e.target;
  console.log(val);
  val = e.target.id;
  console.log(val);
  val = e.timeStamp;
  console.log(val);
  val = e.clientX;
  console.log(val);
  val = e.clientY;
  console.log(val);
  val = e.offsetX;
  console.log(val);
  val = e.offsetY;
  val = this;
  this.style.background = `#${e.offsetX}${e.offsetY}`;
  console.log(val);
  console.log(`hey what's up`);
}

// document.getElementById('').addEventListener('click', message1);
document.querySelector(".Container").addEventListener("click", message1);

document.querySelector(".Container").style.background = "red";


document.querySelector("#name").addEventListener('focus',test)
document.querySelector("#name").addEventListener('keyup',test2)

function test(e)
{
    document.querySelector("#name").style.background="pink"
    console.log('focused');
}


function test2(e)
{
    document.getElementById("demo").innerText=this.value;
}