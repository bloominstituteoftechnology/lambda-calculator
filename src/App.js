import React from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display'; // Importing default export of the {Display} component
import Buttons from './components/DisplayComponents/Buttons'; // Importing default export of the {Buttons} component
// STEP 4 - import the button and display components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const style_Container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const style_App = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '725px',
    width: '450px',
    borderRadius: '15px',
    backgroundColor: '#A9203C',
  }

  return (
    <div
      className="container"
      style={style_Container}>
      <div
        className="App"
        style={style_App}>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Logo />
        <Display />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
