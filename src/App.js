import React from "react";
import { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [inputState, setInputState] = useState("");
  const [dataStorage, setDataStorage] = useState([]);

  const numberHandler = value => {
    setInputState(inputState => {
      inputState = inputState + value;
      return inputState;
    });
  };

  const solveEquation = () => {
    if(dataStorage.includes('x')){
      console.log('Handle Multiplication');
      console.log(dataStorage);
      setInputState(() => Number(dataStorage[0]) * Number(dataStorage[2]))
    }
    
    if(dataStorage.includes('/')){
      console.log('Handle Division')
      setInputState(() => Number(dataStorage[0]) / Number(dataStorage[2]))
    }

    if(dataStorage.includes('+')){
      console.log('Handle Addition');
      setInputState(() => Number(dataStorage[0]) + Number(dataStorage[2]))
    }

    if(dataStorage.includes('-')){
      console.log('Handle Subtraction');
      setInputState(() => Number(dataStorage[0]) - Number(dataStorage[2]))
    }
    setDataStorage(() => []);
  };

  const clear = () => {
    setInputState(() => "");
  };

  const specialHandler = value => {
    if (value === "C") {
      setDataStorage(() => [])
      clear();
    } else if (value === '+/-') {
      setInputState(() => inputState*-1)
    } else if (value === '%') {
      //this is where we will do our percentage.  First need to save value.
      setInputState(() => inputState)
    }
  };

  const operatorHandler = value => {

    setDataStorage(dataStorage => {
      let temp = inputState.split(value);
      temp.forEach(element =>{
        dataStorage.push(element);
        console.log('Updated Data Storage: ' + dataStorage); 
      });
      dataStorage.push(value);
      return dataStorage;
    });

    clear();

    if (value === "=") {
      dataStorage.push(inputState);
      solveEquation();
      console.log('this is data', dataStorage);
      console.log('this is input', inputState);
    }
  };
  

  return (
    <div className="container">
      <Logo />
      <Display value={inputState} />
      <div className="App">
        <div>
          <Specials onButtonPress={specialHandler} />
          <Numbers onButtonPress={numberHandler} />
        </div>
        <Operators onButtonPress={operatorHandler} />
      </div>
    </div>
  );
}

export default App;