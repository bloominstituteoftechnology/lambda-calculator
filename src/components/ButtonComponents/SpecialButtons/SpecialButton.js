import React from "react"

const SpecialButton = props => {
  const cn = () => {
    switch (props.special) {
      case '+/-':
        return 'other'
      case '%':
        return 'percent'
      default:
        return 'C'
    }
  }
  return <button
    className={`${cn()}`}
    onClick={() => props.setDisplay(0)}>{props.special}</button>

}

export default SpecialButton
