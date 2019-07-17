import React, {useState} from "react";
import {specials } from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  // const [specials, setSpecial] = useState(specials);
const btnStyle = {
    width: '80px',
    height: '0',
    paddingBottom: '80px',
    borderRadius: '50%',
    border: '5px solid darkred',
    overflow: 'hidden',        
    background: '#084387', 
    boxShadow: '0 0 0 gray',
    fontSize: '40px',
    color: 'white'    
  }

  return (
    <div>
      {        
          specials.map((item, index) => (
          <button style={btnStyle}>{item}</button>
        ))
                /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials;
