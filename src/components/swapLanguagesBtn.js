import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

const SwapIcon = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 6a4 4 0 1 1 8 0v8h3l-4 4-4-4h3V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8a4 4 0 1 1-8 0V6H0l4-4 4 4H5v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2V6z"/></svg>
)



export default () => {
    const { speechState: {fromLang, toLang}, setFromLang, setToLang } = useSpeechContext()
    function switchLanguages() {
        setFromLang(toLang)
        setToLang(fromLang)
    }
    return (
        <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 w-18 m-1 h-10 order-last sm:order-none rounded"
            onClick={switchLanguages}>
            <SwapIcon className="fill-current text-white w-6" />
        </button>
    )
}