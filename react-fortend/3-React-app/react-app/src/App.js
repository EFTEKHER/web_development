// import {Video,Thumb} from "./components/video";

import Video from "./components/video";
import videosOne from "./data/data";
import "./App.css";
import PlayButton from "./components/playButton";
// function App()
// {
// return (
//   <div>
//   <div>Hello</div>
// <Video></Video>
// <Video></Video>

//   </div>
// );
// }

// function App()
// {
// return (
//   <div className="App">
//   <div>Videos</div>
// <Video bgColor="red" title="React js tutorial"></Video>
// <Video bgColor="green" title="Node js tutorial"></Video>

//   </div>
// );
// }
function App() {
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {videosOne.map((v) => (
        <Video
          key={v.id}
          id={v.id}
          title={v.title}
          views={v.views}
          time={v.time}
          channel={v.channel}
          verified={v.verified}
        >
        <PlayButton  message="play-msg" onPlay={()=>console.log('playing...',v.title)} onPause={()=>console.log('paused...',v.title)}
        >{v.title}</PlayButton> 
        </Video>
      ))}

      <div style={{clear:'both'}}>
        
      {  /* <PlayButton message="pause-msg" onClick={()=>alert('Pause music')}
      >Pause</PlayButton>*/}


      </div>
    </div>
  );
}
export default App;
