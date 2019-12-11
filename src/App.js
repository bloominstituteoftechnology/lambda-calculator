import React, { useState } from "react";
import "./App.css";

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);
  };
  const addOperator = (operator => {
    setDisplayValue(displayValue => displayValue + " " + operator + " ");
  })

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display number={displayValue} />
        <Numbers addNumber={addNumber} />
        <Operators addOperator={addOperator}/>
        <Specials />
      </div>
    </div>
  );
}

export default App;
