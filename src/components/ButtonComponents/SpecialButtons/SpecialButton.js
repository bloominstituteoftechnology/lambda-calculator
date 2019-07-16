import React from "react";
// import { useState } from 'react';

const SpecialButton = props => {
  return (
    <>
     {/* Display a button element rendering the data being passed down from the parent container on props */}
     <button> {props.special}</button> 
    
    </>
  );
};

export default SpecialButton;
