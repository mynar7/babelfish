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
        results: [...state.results, {
          fromLang: state.fromLang,
          toLang: state.toLang,
          spoken: state.lastSpoken,
          translated: payload
        }]
      }
    case 'setFromLang':
      return {
        ...state, fromLang: { name: payload.name, code: payload.code }
      }
    case 'setToLang':
      return {
        ...state, toLang: { name: payload.name, code: payload.code }
      }
    case 'toggleListening':
      return {
        ...state, listening: !state.listening
      }
    case 'clearResults':
      return {
        ...state, results: []
      }
    default:
      return state
  }
}

const SpeechContext = createContext()

function useSpeechContext() {
  const context = useContext(SpeechContext)
  if(!context) {
    // throw new Error(`useSpeechProvider must be used within a SpeechProvider`)
  }
  return context
}

function SpeechProvider(props) {
  const [speechState, dispatch] = useReducer(reducer, {
    fromLang: {
      name: 'English',
      code: 'en',
    },
    toLang: {
      name: 'Japanese',
      code: 'ja',
    },
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
  function clearFromLang() {
    dispatch({type: 'setFromLang', payload: {name: '', code: ''}})
  }
  function setToLang(isoLangCode) {
    dispatch({type: 'setToLang', payload: isoLangCode})
  }
  function clearToLang() {
    dispatch({type: 'setToLang', payload: {name: '', code: ''}})
  }
  function toggleListening() {
    dispatch({type: 'toggleListening'})
  }
  function clearResults() {
    dispatch({type: 'clearResults'})
  }
  const sharedValues = {
    speechState,
    updateLastSpoken,
    addTranslationResult,
    setFromLang,
    clearFromLang,
    setToLang,
    clearToLang,
    toggleListening,
    clearResults,
  }

  return <SpeechContext.Provider value={sharedValues} {...props}/>
}

export { SpeechProvider, useSpeechContext }