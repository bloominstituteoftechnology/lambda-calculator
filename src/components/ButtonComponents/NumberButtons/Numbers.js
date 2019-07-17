import React from "react";
import {numbers } from "../../../data"

//import any components needed

//Import your array data to from the provided data file
const btnStyle = {
  width: '80px',
  height: '0',
  paddingBottom: '80px',
  borderRadius: '50%',
  border: '5px solid darkred',
  overflow: 'hidden',        
  background: '#407180', 
  boxShadow: '0 0 0 gray',
  fontSize: '40px',
  color: 'white'    
}
const btn0Style = {
  width: '160px',
  height: '0',
  paddingBottom: '80px',
  borderRadius: '30%',
  border: '5px solid darkred',
  overflow: 'hidden',        
  background: '#407180', 
  boxShadow: '0 0 0 gray',
  fontSize: '40px',
  color: 'white'    
}

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
                  numbers.map((item, index) => (
                    <button style={item === '0' ? btn0Style : btnStyle}>{item}</button>
                    ))      
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Numbers;

