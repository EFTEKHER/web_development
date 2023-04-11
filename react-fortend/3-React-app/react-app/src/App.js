// import {Video,Thumb} from "./components/video";

import videosOne from "./data/data";
import "./App.css";
import VideoList from "./components/VideoList";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {

  console.log('render app');

  const [videos,setVideos]=useState(videosOne);
  function addVideos(video) {
    setVideos([
      ...videos,
     {...video, id:videos.length+1}
    ])
  }
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>
     <AddVideo addVideos={addVideos}></AddVideo>
     <VideoList videos={videos}></VideoList>
      </div>
    
    </div>
  );
}
export default App;
