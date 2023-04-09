class UI{
    constructor()
    {
        this.profile=document.querySelector('#profile');
    }
    showProfile(user)
    {
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
            <span class="badge bage-primary">Public Respos:${user.public_respos}</span>
            <span class="badge bage-secondary">Public Gists:${user.public_gists}</span>
            <span class="badge bage-success">Followers:${user.followers}</span>
            <span class="badge bage-info">Following:${user.following}</span>
            <br>
            <br>
            <ul class="list-group">
                <li class="list-group-item">Company:${user.company}</li>
                <li class="list-group-item">Website/Blog:${user.blog}</li>
                <li class="list-group-item">Location:${user.loaction}</li>
                <li class="list-group-item">Member Since:${user.created_at}</li>
            </ul>
    
        </div>
        </div>   
    </div>
        `;
    }
    clearProfile()
    {
        this.profile.innerHTML="";
    }
    showAlert(message,className)
    {
        let div=document.createElement("div");
        div.className=className;
        div.appendChild(document.createTextNode(message));
        let document=div.querySelector(".searchContainer");
        let search=document.querySelector(".search");
        CSSContainerRule.inserBefore(div.search);

    }

}