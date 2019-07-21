import React, { useState }from 'react'
import { useSpeechContext } from './providers/speechProvider'
import translate from './utils/translate'

export default () => {
    const [ phrase, setPhrase ] = useState('')
    const [ isPaused, setPaused ] = useState(false)
    const { speechState: {fromLang: {code: fromLang}, toLang: {code: toLang}}, addTranslationResult, updateLastSpoken } = useSpeechContext()

    async function handleSubmit(e) {
        e.preventDefault()
        if (isPaused) return
        setPaused(true)
        const translation = await translate(phrase, fromLang, toLang)
        updateLastSpoken(phrase)
        addTranslationResult(translation)
        setPhrase('')
        setPaused(false)
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input className="border-solid border p-1 border-gray-600 rounded m-1" type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)} />
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-1">Translate</button>
        </form>
    )
}