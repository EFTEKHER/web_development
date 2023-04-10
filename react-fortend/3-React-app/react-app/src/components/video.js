
import './video.css';



// function Video(props)
// {
//     console.log(props);
   
//     let bg='dark';
//     //fragment
// // return <div> <img
// // src="https://placebear.com/160/90"
// // alt="Katherine Johnson"
// // />
// // <div>Rejact Js Tutorials</div>
// // </div>
// return <>
// <img
//  src="https://loremflickr.com/cache/resized/65535_49259934132_521f629f16_320_240_g.jpg"
// alt="Katherine Johnson" />


// <div className={bg} >{props.title} Tutorials</div>
// </>
// }
// function Thumb()
// {
// return <div>Thumb</div>
// }

// export {Video,Thumb};
// function Video({title,bgColor})
// {

//    console.log(title);
// let bg='dark';
    
// return <>
// <img
//  src="https://loremflickr.com/cache/resized/65535_49259934132_521f629f16_320_240_g.jpg"
// alt="Katherine Johnson" />


// <div className={bg} style={{backgroundColor:bgColor}} >{title} Tutorials</div>
// </>
// }
function Video({title,id,channel,views,time,verified})
{


// let channelJsx;
// if(verified)
// {
//    channelJsx=<div className="channel">{channel}✅</div>;
// }
// else{
//    channelJsx=<div className="channel">{channel}</div>;
// }

    
return <>

<div className='container'>
<div className='pic'>
<img src={`https://picsum.photos/id/${id}/160/90/`}
alt="Katherine Johnson" />
</div>


<div className="title">{title} Tutorials</div>
<div className="channel">{channel}{verified&&"✅"}</div>
<div className="views">
{views} views<span>.</span>{time}
</div>
</div>
</>
}
export default Video;