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
          <div className="mt-2 mx-auto" key={index}>
            <p>
              <strong className="mr-2">{fromLang.name}: </strong><span>{spoken}</span>
            </p>
            <p>
              <strong className="mr-2">{toLang.name}: </strong>
              <span>
                {translated.native} <TranslationReader lang={toLang} translation={translated.native} />
              </span>
            </p>
            {translated.romanized &&
            <p>
              <strong className="mr-2">Romanized: </strong><span>{translated.romanized}</span>
            </p>}
            {index !== 0 && <hr className="h-px bg-green-300"/>}
          </div>
        ))
        : speechState.toLang.name && speechState.fromLang.name
          ? <p className="text-center">Press 'Listen' and allow Babelfish to use your microphone to translate your spoken words to {speechState.toLang.name}! (Only works in Chrome)</p>
          : <p className="text-center">Please enter languages to translate from/to.</p>
      }
      </div>
      <div className="h-6"></div>
    </div>
  )
}