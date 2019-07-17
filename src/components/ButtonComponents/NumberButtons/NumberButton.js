import React from "react";
import { cn } from '../../../data'

const NumberButton = (props) => {
  return<button
  style={{ gridArea: cn(props.number) }}
  onClick={() => props.setDisplay(
    props.display === 0 ?
      props.number
      :
      `${props.display}${props.number}`
  )}>{props.number}</button>
}
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
    
  
export default NumberButton
