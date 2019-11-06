import React, {useState} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Display from "./components/DisplayComponents/Display"

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayState, setDisplayState] = useState("")
  const [calcState, setCalcState] = useState(1)
  const [operState, setOperState] = useState("")
  const displayChanger = (number) => {
    if (number === "C"){
      setDisplayState ("")
    }else if (number === "x" || number === "/" || number === "+" || number === "-"){
      // Store current display into calcState, store which operation to complete in operState, clear screen
      setCalcState(Number(displayState))
      setOperState(number)
      setDisplayState ("")
    }else if (number === "="){
      // Calculator logic here
      console.log (calcState, operState, displayState)
      if (operState === "+"){
        setDisplayState (displayValue => calcState + Number(displayValue))
      }else if (operState === "-"){
        setDisplayState (displayValue => calcState - Number(displayValue))
      }else if (operState === "x"){
        setDisplayState (displayValue => calcState * Number(displayValue))
      }else if (operState === "/"){
        setDisplayState (displayValue => calcState / Number(displayValue))
      }
    }else {
      setDisplayState (displayValue => displayValue + number)
    }
    
  }
  return (
    <div className="container">
      <Logo />
      <Display value={displayState}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="left-container">
        <Specials displayChanger={displayChanger}/>
        <Numbers displayChanger={displayChanger} />
        </div>
        <div className="right-container">
        <Operators displayChanger={displayChanger}/>
        </div>
      </div>
    </div>
  );
}

export default App;
