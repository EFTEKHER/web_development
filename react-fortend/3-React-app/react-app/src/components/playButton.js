import './playbutton.css';
import { useState } from 'react';

function PlayButton({children,message,onPlay,onPause})
{
   // let playing=false; //don't use this approch
   const [playing,setPlaying]=useState(false);

    function handleClick(e)

    {
        console.log(e);
        e.stopPropagation();
      
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);

    }
    

console.log(`${message}`);



    return (
        <button onClick={handleClick}>{children}:{playing?'⏸':'⏯'}</button>
    );
}

export default PlayButton;