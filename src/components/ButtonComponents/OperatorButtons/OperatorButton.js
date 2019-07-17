import React from "react"

const OperatorButton = props => {
  return <button
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
