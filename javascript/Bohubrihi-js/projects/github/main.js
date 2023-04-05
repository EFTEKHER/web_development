let searchBtn=document.querySelector('#searchBtn');

let searchUser=document.querySelector('#searchUser');
let ui=new UI();


searchBtn.addEventListener('click', (e)=>{
    let userText=searchUser.value;
    if(userText!='')
    {
        //fetch api
        fetch(`https://api.github.com/users/${userText}`).then((result)=>result.json()).then(data=>{
           console.log(data);

           if(data.message ==="Not Found"){
            //show Alert
ui.showAlert("User not found","alert alert-danger")
           }
           else{
            //showProfile;
            ui.showProfile(data);
           }
        })
    }
    else{
        //clear profile
        ui.clearProfile();

    }

})