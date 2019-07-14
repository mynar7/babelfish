import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

export default () => {
  const { speechState } = useSpeechContext()
  return (
    <>
      {speechState.results.map(({spoken, translated}, index) => (
        <React.Fragment key={index}>
          <p>{spoken}</p>
          <p>{translated}</p>
        </React.Fragment>
      ))}
    </>
  )
}