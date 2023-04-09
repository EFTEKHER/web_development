import './cv.css'

function CV({experience,education,skills})
{
console.log( );

return <>

<div className="container" >
<div className="experience">
<h3>experience:</h3>
</div>
<hr></hr>
<ul>
<li>Year:{experience[0].year}</li>
<li>Company:{experience[0].company} </li>
<li>Role:{experience[0].role} </li>

</ul>
<hr></hr>
<div className="education">
<h3>education</h3>
</div>
<hr></hr>
<ul>
<li>{education[0]}</li>
<li>{education[1]}</li>
</ul>
<hr></hr>
<div className="skills">
<h3>Skills</h3>
</div>
<hr></hr>
<ul>
<li>{skills[0]}</li>
<li>{skills[1]}</li>
</ul>
</div>
</>    


}

export default CV;