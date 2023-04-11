import Video from "./video";
import PlayButton from "./playButton";

function VideoList({videos})
{

    return(
        <>
        {videos.map((v) => (
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
          </>
    )
}
export default VideoList;