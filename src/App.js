// eslint-disable-next-line
import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';


function App() {

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState('');
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);
  };
  const addOperator = (operator) => {
    if (operator === '=') {
      // eslint-disable-next-line
      setDisplayValue(displayValue => eval(displayValue));
    } else {
      setDisplayValue(displayValue => displayValue + ' ' + operator + ' ');
    }
  };
  // const addSpecial = (special) => {
  //   if (special === '=') {
  //     setDisplayValue(displayValue => eval(displayValue));
  //   } else {
  //     setDisplayValue(displayValue => displayValue + ' ' + special + ' ');
  //   }
  // };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display number={displayValue} />
        <div className="allBtn"/>
        <Numbers addNumber={addNumber} />
        <Operators addOperator={addOperator} />
        <Specials />
        
        </div>
    </div>
  );
};

export default App
