fetch("https://api.chucknorris.io/jokes/random/")
	.then(response => response.json())
	.then(data => console.log(data.value))
	.catch(err => console.error(err));



    //async await

async   function getJokes()
    {
        // return 'All the jokes';

        let response= await fetch("https://api.chucknorris.io/jokes/random/");
        let data= await response.json();
        return data;

    }

   
//    getJokes().then(res=>{
//     console.log(res);
//    })

getJokes().then(jokes=>console.log(jokes.value))