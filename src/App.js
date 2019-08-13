import React, { useState } from "react";
import "./App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayValue, setDisplayValue] = useState('0');
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);
  };
  const addOperator = (operator) => {
    if (operator === '=') {
      setDisplayValue(displayValue => eval(displayValue));
    } else {
      setDisplayValue(displayValue => displayValue + '' + operator + '');
    }
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display number={displayValue} />
        {/* line above is same as calling function with its object arg w/ number as a key and 0 as the value: 
        {Display({number: 0})} */}
        <Specials />
        <Numbers addNumber={addNumber} />
        <Operators addOperator={addOperator} />
      </div>
    </div>
  );
}

export default App;
