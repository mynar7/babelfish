import React, { useRef, useEffect } from 'react'


export default ({listName, list = [], action, currentValue, clearAction}) => {
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.value = currentValue
  }, [currentValue])

  function handleChange(value) {
    // inputEl.current.value = value
    const listItem = list.find((item) => item.name === value)
    if (listItem)
      action(listItem)
  }

  function handleClear() {
    inputEl.current.value = ''
    clearAction()
  }

  return (
    <div className="flex flex-wrap mx-4 my-1 justify-center items-center w-48">
      <label htmlFor={listName + '-input'}>{listName}</label>
      <div className="flex">
        <input ref={inputEl} placeholder={currentValue} onFocus={handleClear} className="border-solid border p-1 border-gray-600 rounded" list={listName} name={listName + '-input'} onChange={(e) => handleChange(e.target.value)}/>
        <datalist id={listName}>
          {list.map((item, index) => (
            <option value={item.name} key={index} label={item.code} />
            ))}
        </datalist>
        {/* <button onClick={handleClear} className="bg-purple-500 hover:bg-purple-700 text-white py-1 px-4 rounded">Clear</button> */}
      </div>
    </div>
  )
}