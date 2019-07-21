import React from 'react'
import { useSpeechContext } from './providers/speechProvider'

const ClearIcon = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
)

export default () => {
    const { clearResults } = useSpeechContext()
    return (
        <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 m-1 rounded"
            onClick={clearResults}>
            <ClearIcon className="text-white w-6 fill-current" />
        </button>
    )
}