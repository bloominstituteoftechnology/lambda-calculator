import React, {useState} from "react";


const NumberButton = (props) => {
  console.log(props.number)
  
  return (
    
    <button className = "numberButton" onClick = {()=>
      props.setDisplay(props.display + props.number)
    }>
      {
      /* Display a button element rendering the data being passed down from the parent container on props */
      props.number
      }
    </button>
  );
};
export default NumberButton