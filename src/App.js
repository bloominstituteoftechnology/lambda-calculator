import React, {useState} from "react";
import "./App.css";
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from './components/DisplayComponents/Display'

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
const contain = {
  backgroundColor: 'darkred',
  width: '450px',
  height: '700px',
  border: '5px solid black',

}
const numb = {
  width: '300px',
}
const oper = {
  alignContent: 'right',
  width: '10%',
}
const numbOper = {
  display: 'flex',
  flex: '30%',

}
 
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [dispData, setData] = useState('');
  const [memData, setMem] = useState('');

return (
    <div className="container" style={contain}>
      <Logo />
      <div className="App">
      <Display dispDataD={dispData} />

      <Specials dispDataS={dispData} setDataS={setData} memData={memData} setMem={setMem} />
  <div style={numbOper}>
      <div style={numb}> 
      <Numbers dispDataN={dispData} setDataN={setData} />
      </div> 
      <div style={oper}>
      <Operators dispDataO={dispData} setDataO={setData} />
      </div> 
   </div>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
    
}

export default App;