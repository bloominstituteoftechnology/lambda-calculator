import React from "react";
import SpecialButton from './SpecialButton.js'
//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../../src/data.js'


const Specials = (props) => {

  return (
    <div>
      {specials.map(xSpecial => {
        return <SpecialButton key={xSpecial} text={xSpecial} addSpecial = {props.addSpecial}/>
      })}
    </div>
  );
};

export default Specials;