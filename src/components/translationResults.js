import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

export default () => {
  const { speechState } = useSpeechContext()

  return (
    <>
      {
        speechState.results.length > 0
        ? speechState.results.map(({fromLang, toLang, spoken, translated}, index) => (
          <div className="m-2" key={index}>
            <p><strong>{fromLang}: </strong>{spoken}</p>
            <p><strong>{toLang}: </strong>{translated}</p>
          </div>
        ))
        : <p>Press 'Listen' and allow Babelfish to use your microphone to translate your spoken words to Japanese! (Only works in Chrome)</p>
      }
    </>
  )
}