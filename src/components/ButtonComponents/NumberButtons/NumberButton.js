import React from "react"

const NumberButton = props => {
  const cn = () => {
    switch (props.number) {
      case '1':
        return 'one'
      case '2':
        return 'two'
      case '3':
        return 'three'
      case '4':
        return 'four'
      case '5':
        return 'five'
      case '6':
        return 'six'
      case '7':
        return 'seven'
      case '8':
        return 'eight'
      case '9':
        return 'nine'
      case '.':
        return 'period'
      default:
        return 'zero'
    }
  }
  return <button
    className={cn()}
    onClick={() => props.setDisplay(
      props.display === 0 ?
        props.number
        :
        `${props.display}${props.number}`
    )}>{props.number}</button>
}

export default NumberButton

