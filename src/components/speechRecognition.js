// eslint-disable-next-line
import React, { useEffect, useRef } from 'react'
import { useSpeechContext } from './providers/speechProvider'


function translate(term, fromLang, toLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${term}&dt=rm`;
  return fetch(url)
  .then(res => res.json())
  .then(res => {
      console.log(res)
      return res[0][0][0] ? res[0][0][0] : null
  })
  .catch(err => console.log(err));
}

export default () => {
  const { speechState: {listening, fromLang: {code: fromLang}, toLang: {code: toLang}}, updateLastSpoken, addTranslationResult } = useSpeechContext()
  useEffect(() => {
    if(!listening) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = fromLang;
    const handleResult = async (e) => {
      if (e.results[0].isFinal) {
        const result = e.results[0][0].transcript;
        console.log(e.results[0])
        updateLastSpoken(result)
        const translation = await translate(result, fromLang, toLang);
        addTranslationResult(translation)
      }
    }
    const restartListener = () => {
      if(fromLang === '' || toLang === '') return
      recognition.start()
    }
    recognition.addEventListener('result', handleResult)
    recognition.addEventListener('end', restartListener)
    if(fromLang === '' || toLang === '') return
    recognition.start()
    return () => {
      if(!listening) return
      recognition.removeEventListener('result', handleResult)
      recognition.removeEventListener('end', restartListener)
    }
  }, [listening, fromLang, toLang])
  return null
}