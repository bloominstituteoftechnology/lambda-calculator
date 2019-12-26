import React, {useState} from "react";
import "./App.css";
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';


import Logo from "./components/DisplayComponents/Logo";

function App() {
 
  return (

    <div className="container">
      <Logo />
      <div className="App">
        
        <Display zero="0"/>
      </div>
      <div className="wrapper">
        <Specials  />
        <Operators />
        <Numbers  />
      </div>
      </div>
  );
}

export default App;
