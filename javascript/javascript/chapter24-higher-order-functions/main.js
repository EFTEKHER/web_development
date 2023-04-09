// Higher Order Functions

/* A higher order function is a function that does at least one of the following:
** Takes one or more functions as an argument (parameter)
** Returns a function as the result
*/

// Import JSON data

import {posts} from "./posts.js";

posts.forEach((post)=>{
console.log(post);
});

console.clear();


const filteredPosts=posts.filter((post)=>{
    return post.userId===5;
});

console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post)=>{
    return post.id*10;
});


console.log(mappedPosts);