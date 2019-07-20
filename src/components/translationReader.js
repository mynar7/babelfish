import React, { useState } from "react";

const PlayOutline = ({
    style = {},
    // fill = '#000',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 30 20',
  }) =>
    <svg
      width={width}
      style={style}
    //   height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/>
</svg>


export default ({lang, translation}) => {
    const [isPlaying, setPlaying] =  useState(false)
    // useEffect(() => {
    //     speechSynthesis.getVoices()
    //     console.log(speechSynthesis.getVoices().map(voice => voice.lang))
    // }, [])
    function readTranslation() {
        if (isPlaying) return
        setPlaying(true)
        const msg = new SpeechSynthesisUtterance()
        msg.lang = lang.code
        msg.volume = 1
        msg.text = translation
        // console.log(translation)
        // console.log(msg)
        window.speechSynthesis.speak(msg)
        msg.onend = (e) => {
            // console.log('Finished in ' + e.elapsedTime + ' milliseconds.');
            setPlaying(false)
        };
    }
    const styles = {
        pointerEvents: isPlaying ? 'none' : 'auto',
        opacity: isPlaying ? 0 : 1,
        transition: 'opacity 0.2s'
    }
    return (
        <span style={styles} onClick={readTranslation}>
            <PlayOutline width={30} className={'fill-current text-green-500 ml-2'}/>
        </span>
    )
}