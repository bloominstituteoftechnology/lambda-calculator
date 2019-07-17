import React from "react"
import { cn } from '../../../data'

const SpecialButton = props => {
  return <button
    className={`${cn(props.special)}`}
    onClick={() => props.setDisplay(0)}>{props.special}</button>

}

export default SpecialButton
