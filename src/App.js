import React, {useState} from "react";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

import "./App.css";
import "./index.css";

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";


function App() {
  const [number, setNumber] = useState("0");

  function onClickSpecial(special) {
    if (special === 'C') {
      setNumber("0");
    } else if (special === '%') {
      const newDisplay = number + " " + special + " ";
      setNumber(newDisplay);
    } else if (special === "+/-") {
      const currentExpression = number;
      const output = eval(currentExpression).toString();
      setNumber(output);

      if (output > 0) {
        setNumber(-Math.abs(Number(output)));
      }
      else {
        setNumber(Math.abs(Number(output)));
      }
    }
  }

  function onClickNumber(_number) {
    var currentNumber = "";

    if (number !== "0") {
      currentNumber = number;
    }

    const newNumber = currentNumber + _number;
    setNumber(newNumber);
  }

  function onClickOperator(char, value) {
    if (char === '=') {
      const currentExpression = number;
      const output = eval(currentExpression).toString();
      setNumber(output);
    } else {
      const newDisplay = number + " " + value + " ";
      setNumber(newDisplay);
    }
  }

  return (
    <div className="container">
      <Logo className="logo" />
      <div className="displayContainer">
        <Display result={number} />
      </div>
      <div className="App">
        <div className="buttonContainer">
          <Specials onClickSpecial={onClickSpecial} />
          <Numbers onClickNumber={onClickNumber} />
        </div>
        <Operators onClickOperator={onClickOperator} />
      </div>
    </div>
  );
}

export default App;
