import React, {useState} from "react";
import SpecialButton from './SpecialButton';

//import any components needed
import {specials} from '../../../data';
//Import your array data to from the provided data file

const Specials = (props) => {
  const [calSpecials, setSpecial] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calSpecials.map( (special, index) => <SpecialButton key={index} special={special} changeData={props.changeData} />)}
    </div>
  );
};

export default Specials;