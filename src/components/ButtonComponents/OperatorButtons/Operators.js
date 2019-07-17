
import React, {useState} from "react";
import {operators } from "../../../data"

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
  color: 'white',    
}

const Operators = () => {
  // STEP 2 - add the imported data to state
  // const [operators, setSpecial] = useState(operators);
  return (
    <div>
      {
          operators.map((item, index) => (
          <button style={btnStyle}>{item.char}</button>
        ))
                /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;
