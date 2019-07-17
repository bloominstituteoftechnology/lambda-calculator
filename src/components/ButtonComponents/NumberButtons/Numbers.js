import React from "react"

import NumberButton from './NumberButton'
import { numbers } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  return numbers.map(num => <NumberButton number={num} display={props.display} setDisplay={props.setDisplay} />)
}

export default Numbers
