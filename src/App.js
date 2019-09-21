import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState([]);
  const [decimal, setDecimal] = useState(false);
  const [percent, setPercent] = useState(false);
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState([]);
  // const [special, setSpecial] = useState(0);
  const [amount, setAmount] = useState([]);
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const handleNumbers = (event) => {
    if (event.target.innerText === '.') {
      setDecimal(true);
    } 
    if (decimal && event.target.innerText === '.') {
      return null;
    } else {
      setNumber(event.target.value);
    }
  }

  const handleSpecials = (event) => {
    if (event.target.innerText === 'C') {
      setDisplay([]);
      setNumber(0);
      setHistory('');
      setDecimal(false);
      setPercent(false);
    }

    if (event.target.innerText === '+/-') {
      let opposite = display.join('');
      setDisplay([]);
      setNumber(opposite * -1)
    }

    if (event.target.innerText === '%') {
      if (percent) {
        return null;
      } else {
        setDisplay([]);
        setNumber( number * .01)
        setPercent(true);
      }
    }
  }

  const handleDisplay = (event) => {
    display.push(number.toString());

    if (display.length > 1 && display[0] === "0") {
      display.shift();
    }
    setDisplay(display);
  }

  const handleOperator = (event) => {
    setOperator(event.target.value);
    let num1 = display.join('').toString();
    let num2 = display.join('').toString();
    
    if (history.length === 0) {
      if (num1 === []) {
        return null;
      } else {
        setDecimal(false);
        setNumber(0);
        setDisplay([]); 
        setHistory(history.push(num1));
        setHistory(history.push( event.target.innerText));
        setHistory(history);
        console.log('history', history);
      }
    } 

    if (operator && event.target.innerText === '=') {
      // setDisplay([]);
      setHistory(history.push(num2));
      setHistory(history);
      console.log('calculating...');
      
      // setNumber(0); // set number to result of calculation
      if (history[1] === '+') {
        let answer = ( Number(history[0]) + Number(history[2]));
        setDisplay([]);
        setNumber(answer);
      }

      if (history[1] === '-') {
        let answer = ( Number(history[0]) - Number(history[2]));
        setDisplay([]);
        setNumber(answer);
      }

      if (history[1] === 'x') {
        let answer = ( Number(history[0]) * Number(history[2]));
        setDisplay([]);
        setNumber(answer);
      }
      
      if (history[1] === '/') {
        let answer = ( Number(history[0]) / Number(history[2]));
        setDisplay([]);
        setNumber(answer);
      }

    }
    console.log('history', history);
    
    

  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
          <Display 
            handleDisplay={handleDisplay}
            display={display}
          />
          <div className="btn-container">
            <div className="nums-specials">
              <Specials handleSpecials={handleSpecials} />
              <Numbers handleNumbers={handleNumbers} />
            </div>
            <div>
              <Operators handleOperator={handleOperator} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
