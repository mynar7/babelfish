import React, { useRef } from 'react'


export default ({listName, list = [], action, currentValue, clearAction}) => {
  const inputEl = useRef(null)

  function handleChange(value) {
    console.log(value)
    inputEl.current.value = value
    const listItem = list.find((item) => item.name === value)
    console.log(listItem)
    if (listItem)
      action(listItem)
  }

  function handleClear() {
    inputEl.current.value = ''
    clearAction()
  }

  return (
    <div className="flex flex-wrap m-4 items-center w-64">
      <label className="mr-2" htmlFor={listName + '-input'}>{listName}</label>
      <div className="flex">
        <input ref={inputEl} placeholder={currentValue} className="border-solid border p-1 border-gray-600" list={listName} name={listName + '-input'} onChange={(e) => handleChange(e.target.value)}/>
        <datalist id={listName}>
          {list.map((item, index) => (
            <option value={item.name} key={index} label={item.code} />
            ))}
        </datalist>
        <button onClick={handleClear} className="bg-purple-500 hover:bg-purple-700 text-white py-1 px-4 rounded">Clear</button>
      </div>
    </div>
  )
}