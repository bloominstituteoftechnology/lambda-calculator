import React from "react";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should receive 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const mainContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const calcStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    background: '#AF1E39',
    height: '709px',
    width: '402px',
    borderRadius: '8px',
  }

  const calcBorderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
    height: '709px',
    width: '402px',
  }

  const buttonWrapperStyle = {
    height: '500px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'

  }

  const logoStyle = {
    marginTop: '10px',
    marginLeft: '10px',
  }

  return (
    <div className="container" style={mainContainer}>

      <div className="App" style={calcStyle}>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Logo style={logoStyle} />
        <Display />
        <div style={buttonWrapperStyle}>
          <Numbers />
          <Operators />
          <Specials />
        </div>
      </div>
    </div >
  );
}

export default App;

