import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

export default () => {
  const {speechState: {listening}, toggleListening} = useSpeechContext()
  return (
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      onClick={toggleListening}>
      {listening ? 'Stop' : 'Listen'}
    </button>
  )
}