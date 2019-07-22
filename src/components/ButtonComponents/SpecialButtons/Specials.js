import React from "react";
import {specials } from "../../../data"
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file
export const btnStyle = {
  width: '80px',
  height: '0',
  paddingBottom: '80px',
  borderRadius: '50%',
  border: '5px solid darkred',
  overflow: 'hidden',        
  background: '#084387', 
  boxShadow: '0 0 0 gray',
  fontSize: '40px',
  color: 'white',
  lineHeight: '170%'    
}
specials.push('MR')
specials.push('M=')

const Specials = props => {
  // STEP 2 - add the imported data to state
  // const [specials, setSpecial] = useState(specials);

  return (
    <div>
      {        
          specials.map((specialS) => (
          <SpecialButton specialSB={specialS} dispDataSB={props.dispDataS} setDataSB={props.setDataS} memData={props.memData} setMem={props.setMem}/>
          ))
                /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
