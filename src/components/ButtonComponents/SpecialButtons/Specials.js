import React, {useState} from "react";
import SpecialButton from './SpecialButton';

//import any components needed
import {specials} from '../../../data';

//Import your array data to from the provided data file

const Specials = props => {
  return specials.map(spec => <SpecialButton special={spec} display={props.display} setDisplay={props.setDisplay} />)
}

export default Specials
