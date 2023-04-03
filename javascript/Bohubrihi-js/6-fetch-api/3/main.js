//Fetch Api

//Fetch Api uses javascript promise

document.getElementById("get_data").addEventListener("click", getData);

// function getData() {
//   console.log("click");

//   fetch("https://api.chucknorris.io/jokes/random/")
//     .then(function (response) {
//       //promise return in that
//       // console.log(response.text());
//       // console.log(response.json());
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     }).catch(function (err) {
//         console.log(err);
//     });
// }
//Arrow Function
// let test=()=>{}

function getData() {
  console.log("click");

  fetch("https://api.chucknorris.io/jokes/random/")
    .then((res) => res.json())
    .then((data) => document.getElementById("output").innerHTML=`${data.value}`)
    .catch((err) => console.log(err));
}
