import React, { useState } from "react";
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file


const Specials = () => {

  
  
  return (

    <div> {
      specials.map((special) => {
    console.log("Specials were mapped correctly");
    return <SpecialButton special = {special}
     />
    
  })}
    </div>
  );
};

export default Specials;

