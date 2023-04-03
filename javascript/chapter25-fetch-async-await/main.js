// Fetch API requires a discussion of...
// Callbacks, Promises,Thenables, and Async/Await

// Callbacks
// function firstFunction(parameters, callback) {
//   // Do stuff
//   callback();
// }

// AKA "Callback Hell"
/* firstFunction(param, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {});
    });
}); */

// Promises
// 3 states: Pending, Fulfilled, Rejected
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;

//   if (!error) {
//     resolve("Yes ! resolved the promise !");
//   } else {
//     reject("No! rejected the promise");
//   }
// });

// console.log(myPromise);

// myPromise.then(value=>{
//     console.log(value);
// })

// console.log(myPromise);

// myPromise.then(value=>{
//    return value +1;
// })
// .then(newValue=>{
//     console.log(newValue);
// })
// .catch(err=>{
//     console.error(err);
// })
//pending
// const myNextPromise=new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("mynextPromise Resolved");
// }, 3000);
// });

// myNextPromise.then(value=>{
//     console.log(value);
// });

// myPromise.then(value=>{
//     console.log(value);
// });

// Using the Fetch API 👇
//  Using the Fetch API 👇
// const users = fetch("https://jsonplaceholder.typicode.com/users");

// // Pending
// console.log(users);
//  const users=  fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     console.log(response);
//     return response.json();
// })
// .then(data => {
//     data.forEach(user => {
//         console.log(user);
//     })
// });

// console.log(users);

//async await
// const myUsers = {
//   userList: [],
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   //   console.log(jsonUserData);
//   return jsonUserData;
// };

// myCoolFunction();

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   // console.log(data);

//   myUsers.userList = data;

//   console.log(myUsers.userList);
// };

// anotherFunc();

// console.log(myUsers.userList);

// //workflow function;

// const getAllUserEmail = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });
// console.log(userEmailArray);

//   return userEmailArray;

//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmail();

//2nd parameter of fetch is object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokeData = await response.json();

  console.log(jsonJokeData.joke);
};

getDadJoke();

const getDadJoke1 = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });

  const textJokeData = await response.text();

  console.log(textJokeData);
};

getDadJoke1();

const jokeObject = {
  id: "0oO71TSv4Ed",

  joke: "Why was it called the dark ages? Because of all knigths.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

postData(jokeObject);
let config = {
  headers: {
    Accept: "application/json",
  },
};
// const requestJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/",config);
//   const jsonResponse = await response.json();
//   console.log(jsonResponse.joke);
// };
//  requestJoke();

//abstract into functions;

//maybe from a form

const getDataFromForm = () => {
  const requestObject = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObject;
};

const buildRequestUrl = (requestData) => {
  return `https://icanhazdadjoke.com/?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
  } catch (error) {
    console.error(error);
  }
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//procedural "workflow" function

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("Finished processing joke request.");
};

processJokeRequest();
