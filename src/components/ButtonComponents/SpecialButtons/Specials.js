import React from "react"
import { specials } from "../../../data";
import SpecialButton from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  return specials.map(spec => <SpecialButton special={spec} display={props.display} setDisplay={props.setDisplay} />)
}

export default Specials
