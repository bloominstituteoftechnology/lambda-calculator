import React, {useState} from "react";

//import any components needed
import { specials } from '../../../data' ;
import SpecialButton from './SpecialButton';
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {specialState.map((button, index) => (

        <SpecialButton key={index} button={button}/>
      ))}
    </div>
  );
};

export default Specials;
