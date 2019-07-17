import React, { useState } from "react"
import { Operators, Specials, Numbers } from './components/ButtonComponents'
import { Logo, Display } from './components/DisplayComponents'

import "./App.scss"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
  const [display, setDisplay] = useState(0)

  return (
    <div className="container">
      <div className='top'>
        <Logo />
        <Display display={display} />
      </div>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Numbers display={display} setDisplay={setDisplay} />
        <Operators display={display} setDisplay={setDisplay} />
        <Specials display={display} setDisplay={setDisplay} />
      </div>
    </div>
  )
}

export default App
