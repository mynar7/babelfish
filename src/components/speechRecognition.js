// eslint-disable-next-line
import React, { useEffect } from 'react'
import { useSpeechContext } from './providers/speechProvider'
import translate from './utils/translate'

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
        updateLastSpoken(result)
        const translation = await translate(result, fromLang, toLang)
        if (translation) addTranslationResult(translation)
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