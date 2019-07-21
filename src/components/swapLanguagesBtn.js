import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

export default () => {
    const { speechState: {fromLang, toLang}, setFromLang, setToLang } = useSpeechContext()
    function switchLanguages() {
        setFromLang(toLang)
        setToLang(fromLang)
    }
    return (
        <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 m-1 rounded"
            onClick={switchLanguages}>
            Swap Languages
        </button>
    )
}