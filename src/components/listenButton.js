import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

const MicIcon = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z"/></svg>
)

const PauseIcon = ({className, style}) => (
  <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
)

export default () => {
  const {speechState: {listening}, toggleListening} = useSpeechContext()
  return (
    <button className={`${!listening ? 'bg-purple-500 hover:bg-purple-700' : 'border-2 border-solid border-red-700 hover:bg-red-300'} font-bold py-2 px-4 m-1 rounded`}
      onClick={toggleListening}>
      {listening
        ?  <PauseIcon className="fill-current text-red-700 w-6" />
        : <MicIcon className="fill-current text-white w-6" />}
    </button>
  )
}