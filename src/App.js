import React from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display';
import Logo from './components/DisplayComponents/Logo';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';


// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

function App() {

  return (
    <div className="container">
      <div class="content">
      <Logo />
      <div className="App">
        <Display />
        <div className="buttonsContainer">
          <div>
            <Specials />
            <Numbers />
          </div>
          <Operators />
        </div>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
      </div>
    </div>
  );
}

export default App;