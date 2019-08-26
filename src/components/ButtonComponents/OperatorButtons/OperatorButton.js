import React from "react";
import { cn } from '../../../data'

const OperatorButton = props => {
  return <button
    style={{ gridArea: cn(props.operator.char) }}
    onClick={() => {
      switch (props.operator.char) {
        case '=':
          return props.setDisplay(eval(props.display))
        default:
          return props.setDisplay(`${props.display}${props.operator.value}`)
      }
    }}
  >{props.operator.char}</button>
}

export default OperatorButton

