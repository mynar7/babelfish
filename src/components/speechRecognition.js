// eslint-disable-next-line
import React, { useEffect } from 'react'
import { useSpeechContext } from './providers/speechProvider'


function translate(term, fromLang, toLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${term}`;
  return fetch(url)
  .then(res => res.json())
  .then(res => {
      return res[0][0][0] ? res[0][0][0] : null
  })
  .catch(err => console.log(err));
}

export default () => {
  const { speechState: {listening, fromLang, toLang}, updateLastSpoken, addTranslationResult } = useSpeechContext()
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = fromLang;
  useEffect(() => {
    if(!listening) return
    const handleResult = async (e) => {
      if (e.results[0].isFinal) {
        const result = e.results[0][0].transcript;
        updateLastSpoken(result)
        const translation = await translate(result, fromLang, toLang);
        addTranslationResult(translation)
      }
    }
    const restartListener = () => {
      recognition.start()
    }
    recognition.addEventListener('result', handleResult)
    recognition.addEventListener('end', restartListener);
    recognition.start()
    return () => {
      if(!listening) return
      recognition.removeEventListener('result', handleResult)
      recognition.removeEventListener('end', restartListener)
    }
  }, [listening])

  return null
}