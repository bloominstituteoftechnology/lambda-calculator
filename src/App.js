import React, {useState} from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display';
import Logo from './components/DisplayComponents/Logo';
import ButtonsWrapper from './components/ButtonComponents/ButtonsWrapper';

import {numbers,specials,operators} from './data';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

function App() {

  const [total, setTotal] = useState(0);
  const [displayCharacters, updateDisplayChar] = useState("");

  function resetdisplayCharacters() {
    updateDisplayChar("")
  }

  function evaluateString(displayCharacters) {
    return eval(displayCharacters);
  }

  function isEqualToSignInDisplayCharacter(theCharactersToCheck) {
    if(theCharactersToCheck !== "" && theCharactersToCheck.split("=").length > 1) return true;
    return false;
  }

  function addCharacter(ch) {
    if(ch === "C") {
      resetdisplayCharacters();
      return;
    }

    if(isEqualToSignInDisplayCharacter(displayCharacters)) {
      resetdisplayCharacters();
      updateDisplayChar(ch)
      return;
    }

    if (operators.includes(ch)) ch = " "+ch;

    if(ch === "=") {
      const newTotal = evaluateString(displayCharacters);
      setTotal(newTotal);
      const charaterToDisplay = `${displayCharacters}${ch} ${newTotal}`;
      console.log(total)
      updateDisplayChar(charaterToDisplay)
      return;
    }


    let charaterToDisplay = `${displayCharacters}${ch}`;
    updateDisplayChar(charaterToDisplay)
  }

  return (
    <div className="container">
      <div className="content">
        <Logo />
        <div className="App">
          <Display displayCharacters={displayCharacters} />        
          <ButtonsWrapper addCharacter={addCharacter} setTotal={setTotal}  />
        </div>
      </div>
    </div>
  );
}

export default App;