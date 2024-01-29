import React, { useEffect, useState } from 'react';
import './App.css'
import Board from './board.jsx'
function App() {
  const object = {
    name: "nikhil",
    surname: 'SAvant'
  }
  let [text,setText] = useState('')
  let [includeNumber, setIncludeNumber] = useState(true)
  let [includeSpecial, setIncludeSpecial] = useState(false)
  let [length, setlength] = useState(8) 
  useEffect(() => {
    setText('' + includeNumber+includeSpecial+ length)
  }, [includeNumber, includeSpecial, length])

  return (

    <>
      <div>
        <input type="text" VALUE={text} />
        <br></br>
        <input type="range" min="1" max="100" value={length} onChange={(e) => {
          setlength(e.target.value)
        }} />
        <label for="number"> {length} </label><br />
        <br/>
        <input type="checkbox" id="number" name="number" checked={includeNumber} onChange={(e) => {
          setIncludeNumber(prev => { return !prev})
        }} /> 
        <label for="number"> lenght</label><br/>
        <input type="checkbox" id="special" name="special" checked={includeSpecial} onChange={(e) => {
          setIncludeSpecial(prev => { return !prev })
        }} />
        <label for="special"> special</label><br/>
      </div>
    </>
  )
}

export default App
