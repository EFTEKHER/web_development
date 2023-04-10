import './playbutton.css';


function PlayButton({children,message,onPlay,onPause})
{
    let playing=false; //don't use this approch
    function handleClick(e)

    {
        console.log(e);
        e.stopPropagation();
        e.preventDefault();
        if(playing) onPause();
        else onPlay();

        playing=!playing;

    }
    

console.log(`${message}`);



    return (
        <button onClick={handleClick}>{children}:{playing?'>':'||'}</button>
    );
}

export default PlayButton;