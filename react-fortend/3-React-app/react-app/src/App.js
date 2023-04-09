// import {Video,Thumb} from "./components/video";

import Video from "./components/video";
import "./App.css";
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
  let x = "Eftekher Ali Efte";
  let obj = {
    title: "Machine learning tutorial",
    views: "100k",
    time: "1 month ago",
    channel: "Eftekher Ali Efte",
  };
  let resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:['undergraduate in Cse','intermediate in Science'],
    skills : [ 'react js', 'node js'],
    };
  return (
    <div className="App">
      <div>Videos</div>
      <Video
        title="React js tutorial"
        views="10K"
        time="1 year ago"
        channel={x}
      ></Video>
      <Video
        title="Node js tutorial"
        views="100k"
        time="1 month ago"
        channel={x}
      ></Video>
      <Video {...obj}></Video>
      <Video
        title="Mongo Db tutorial"
        views="100k"
        time="1 month ago"
        channel={x}
      ></Video>
    </div>
  );
}
export default App;
