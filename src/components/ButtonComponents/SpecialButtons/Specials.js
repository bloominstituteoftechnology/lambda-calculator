import React from "react";
import SpecialButton from './SpecialButton.js'
//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../../src/data.js'


const Specials = (props) => {
  
  return (
    <div>
      {specials.map(xSpecial => <SpecialButton key={xSpecial} text={xSpecial} pushSpecial = {props.pushSpecial}/>)}
    </div>
  );
};

export default Specials;