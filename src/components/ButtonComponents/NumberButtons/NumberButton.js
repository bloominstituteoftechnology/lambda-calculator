import React from "react"
import { cn } from '../../../data'

const NumberButton = props => {
  return <button
    style={{ gridArea: cn(props.number) }}
    onClick={() => props.setDisplay(
      props.display === 0 ?
        props.number
        :
        `${props.display}${props.number}`
    )}>{props.number}</button>
}

export default NumberButton

