//callback function

//synchronous process to asynchronous process



// setTimeout(function()
// {
// console.log('Hello world');
// },4000)

//synchronus 
// let persons=[
//     {firstName:'John',lastName:'Smith'},
//     { firstName:'Smith',lastName:'jonny'}, 
// ]


// function createPerson(person){

//     setTimeout(function(){
//         persons.push(person);
//     },4000)
// }


// function getperson()
// {
//     setTimeout(function(){
//         let output='';
//         persons.forEach(function(person){
//         output+=`<li>${person.firstName} ${person.lastName}</li> `
//     },
//     )
//     document.getElementById('output').innerHTML=output;
// },1000)
// }


// createPerson({firstName:"Tonmoy",lastName:"khan"});
// getperson();

//asynchronus


let persons=[
    {firstName:'John',lastName:'Smith'},
    { firstName:'Smith',lastName:'jonny'}, 
]


function createPerson(person,callback){

    setTimeout(function(){
        persons.push(person);
        callback();
    },2000);
}


function getperson()
{
    setTimeout(function(){
        let output='';
        persons.forEach(function(person){
        output+=`<li>${person.firstName} ${person.lastName}</li> `
    },
    )
    document.getElementById('output').innerHTML=output;
},500)
}


createPerson({firstName:"Tonmoy",lastName:"khan"},getperson);


