import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

export default () => {
  const { speechState } = useSpeechContext()

  return (
    <>
      {
        speechState.results.length > 0
        ? speechState.results.map(({spoken, translated}, index) => (
          <React.Fragment key={index}>
            <p>{spoken}</p>
            <p>{translated}</p>
          </React.Fragment>
        ))
        : <p>Press 'Listen' and allow Babelfish to use your microphone to translate your spoken words to Japanese! (Only works in Chrome)</p>
      }
    </>
  )
}