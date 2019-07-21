import React, { useState }from 'react'
import { useSpeechContext } from './providers/speechProvider'
import translate from './utils/translate'

const TranslateIcon = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/></svg>
)

export default () => {
    const [ phrase, setPhrase ] = useState('')
    const [ isPaused, setPaused ] = useState(false)
    const { speechState: {fromLang: {code: fromLang}, toLang: {code: toLang}}, addTranslationResult, updateLastSpoken } = useSpeechContext()

    async function handleSubmit(e) {
        e.preventDefault()
        const trimmedPhrase = phrase.trim()
        if (isPaused || trimmedPhrase.length === 0) return
        setPaused(true)
        const translation = await translate(trimmedPhrase, fromLang, toLang)
        updateLastSpoken(trimmedPhrase)
        if (translation) addTranslationResult(translation)
        setPhrase('')
        setPaused(false)
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input className="border-solid border p-1 border-gray-600 rounded m-1" type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)} />
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-1">
                <TranslateIcon className="w-4 fill-current text-white" />
            </button>
        </form>
    )
}