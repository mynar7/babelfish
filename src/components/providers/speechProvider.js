import React, { createContext, useContext, useReducer } from 'react'

function reducer(state, action) {
  const { payload, type } = action
  switch(type) {
    case 'updateLastSpoken':
      return {
        ...state,
        lastSpoken: payload
      }
    case 'addResult':
      return {
        ...state,
        results: [...state.results, { spoken: state.lastSpoken, translated: payload }]
      }
    case 'setFromLang':
      return {
        ...state, fromLang: payload
      }
    case 'setToLang':
      return {
        ...state, toLang: payload
      }
    case 'toggleListening':
      return {
        ...state, listening: !state.listening
      }
    default:
      return state
  }
}

const SpeechContext = createContext()

function useSpeechContext() {
  const context = useContext(SpeechContext)
  if(!context) {
    throw new Error(`useSpeechProvider must be used within a SpeechProvider`)
  }
  return context
}

function SpeechProvider(props) {
  const [speechState, dispatch] = useReducer(reducer, {
    fromLang: 'en',
    toLang: 'ja',
    lastSpoken: '',
    listening: false,
    results: []
  })
  function updateLastSpoken(lastSpokenPhrase) {
    dispatch({type: 'updateLastSpoken', payload: lastSpokenPhrase})
  }
  function addTranslationResult(result) {
    dispatch({type: 'addResult', payload: result})
  }
  function setFromLang(isoLangCode) {
    dispatch({type: 'setFromLang', payload: isoLangCode})
  }
  function setToLang(isoLangCode) {
    dispatch({type: 'setToLang', payload: isoLangCode})
  }
  function toggleListening() {
    dispatch({type: 'toggleListening'})
  }
  const sharedValues = {
    speechState,
    updateLastSpoken,
    addTranslationResult,
    setFromLang,
    setToLang,
    toggleListening,
  }

  return <SpeechContext.Provider value={sharedValues} {...props}/>
}

export { SpeechProvider, useSpeechContext }