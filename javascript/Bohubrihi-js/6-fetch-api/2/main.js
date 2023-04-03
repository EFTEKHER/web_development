//promises
//asynchronus


let persons=[
    {firstName:'John',lastName:'Smith'},
    { firstName:'Smith',lastName:'jonny'}, 
]


function createPerson(person){
    let prom=new Promise(function(resolve, reject){
        persons.push(person);
        let error=true;
if(!error)
{
    resolve();
}
else{
    reject(`Error`);
}
  
    });
     return prom;
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

createPerson({firstName:"Tonmoy",lastName:"khan"}).then(getperson).catch(function(err) {
    console.log(err);
});



