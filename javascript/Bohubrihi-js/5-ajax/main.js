//asynchronous programming

// AJAX--> asynchronous JavaScript And XML

//get data without loading page



// document.getElementById("get_data").addEventListener("click", loadData);

// function loadData() {

//     console.log("Button clicked");

//     // Create XHR object (xml http reques)

//     let xhr = new XMLHttpRequest();

//     // console.log(xhr);
//     //open
//     xhr.open('GET','data.txt',true);

//     xhr.onload=function() {
// //http statuses
// //200-"on"
// //403-->"Forbidden"
// //404-->"Not found"

// if(this.status===200)
// {
//     console.log(this.status);
//     console.log(this.responseText);
//     document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
// }
// }
// xhr.send()
// console.log(xhr);
// }

document.getElementById('get_data').addEventListener('click', onLoad);


// function onLoad() {
// let xhr =new XMLHttpRequest();

// xhr.open('GET', 'data.txt',true);

// xhr.onreadystatechange = function()
// {
//     if(this.status===200 && this.readyState===4 )
//     {

//         document.getElementById('output').innerHTML=`<p>${this.responseText}</p>`;
//         console.log(this.responseText);
//     }
// }
// xhr.send();
// console.log(xhr);
// }


// onreadystatechange	Defines a function to be called when the readyState property changes
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference
// statusText	Returns the status-text (e.g. "OK" or "Not Found")


function onLoad() {
    let xhr =new XMLHttpRequest();
    
    xhr.open('GET', 'data.txt',true);
    
    xhr.onprogress=function()
     {
        console.log(xhr.readyState);
                document.getElementById('output').innerHTML=`<p>${this.responseText}</p>`;
        console.log(this.responseText);
     }
    xhr.send();
    console.log(xhr);
    }
    