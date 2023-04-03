//https://api.chucknorris.io/jokes/random


document.getElementById('get_data').addEventListener('click', loadJokes);


function loadJokes(e) {
    let xhr= new XMLHttpRequest();

    xhr.open('GET','https://api.chucknorris.io/jokes/random/',true );

    xhr.onload=function() {
        if(this.status===200)
        {
            let data=JSON.parse(this.responseText);
        //     let joke=data.value;
        //             document.getElementById('output').innerHTML=`<p>${joke}</p>`;
        // console.log(this.responseText);
      

        // console.log(joke)
        console.log(data);
        }
    }
    xhr.send();

}


