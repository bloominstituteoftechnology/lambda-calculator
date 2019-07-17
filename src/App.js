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
  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [selectedOperator, setSelectedOperator] = useState("")
  const [total, setTotal] = useState("")

  const selectOperator = (operator) => {
    if ( selectedOperator === "" ) {
      setSelectedOperator(operator)
    } 
    if ( operator === "=" ) {
      console.log("showtotal", {showTotal})
      showTotal()
    }
  }

  const selectNumber = (number) => {
    if ( selectedOperator === "" ) {
      setFirstNumber(`${firstNumber}${number}`)
    } else {
      setSecondNumber(`${secondNumber}${number}`)
    }
  }

  // const selectFirstNumber = (firstNumber) => {
  //   setFirstNumber(firstNumber)
  // }
  // const selectSecondNumber = (secondNumber) => {
  //   setSecondNumber(secondNumber)
  // }

  const showTotal = () => {
    console.log("firstNum",{firstNumber})
    console.log("secondNum",{secondNumber})
    console.log("Operator",{selectedOperator})
    setTotal(
      eval(`${firstNumber} ${selectedOperator} ${secondNumber}`)
    ) 
  }

  console.log("selectedOperator", selectedOperator)


  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display 
          showTotal={ showTotal }
          total={ total }
          firstNumber={ firstNumber }
          secondNumber={ secondNumber }
          selectedOperator={ selectedOperator }
        />
        <Numbers 
          // selectFirstNumber={ selectFirstNumber } selectSecondNumber={ selectSecondNumber }
          selectNumber={ selectNumber }
        />
        <Specials />
        <Operators 
          selectOperator={ selectOperator }
        />

        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;