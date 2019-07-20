import React from 'react'
import { useSpeechContext } from './providers/speechProvider'
import TranslationReader from './translationReader'
export default () => {
  const { speechState } = useSpeechContext()

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 p-2">
      <div className="flex flex-col-reverse">
      {
        speechState.results.length > 0
        ? speechState.results.map(({fromLang, toLang, spoken, translated}, index) => (
          <div className="m-2" key={index}>
            <p className="flex justify-between"><strong>{fromLang.name}: </strong>{spoken}</p>
            <p  className="flex justify-between">
              <strong className="mr-4">{toLang.name}: </strong>
              <span>{translated.native} <TranslationReader lang={toLang} translation={translated.native} /></span>
            </p>
            {translated.romanized && <p  className="flex justify-between"><strong>Romanization: </strong>{translated.romanized}</p>}
          </div>
        ))
        : speechState.toLang.name && speechState.fromLang.name
          ? <p>Press 'Listen' and allow Babelfish to use your microphone to translate your spoken words to {speechState.toLang.name}! (Only works in Chrome)</p>
          : <p>Please enter languages to translate from/to.</p>
      }
      </div>
      <div className="h-6"></div>
    </div>
  )
}