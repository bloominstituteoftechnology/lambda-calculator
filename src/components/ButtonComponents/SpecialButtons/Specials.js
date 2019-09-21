import React from "react";

//import any components needed
import { specials } from'../../../data';
//Import your array data to from the provided data file

const Specials = (props) => {
  console.log('specials', props)
  // STEP 2 - add the imported data to state
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map( (special, index) => {
         return <button 
                        key={index} 
                        className="buttons specials" 
                        onClick={props.handleSpecials}
                >
                  {special}
                </button>    
       })}
    </div>
  );
};
export default Specials;