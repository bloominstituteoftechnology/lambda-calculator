import React, {useState} from "react";


const OperatorButton = (props) => {
  console.log(props.operator)
  return (
    <div className = "operatorButtonDiv">
    <button class="operatorButton" onClick = {()=>
      props.setDisplay(props.display + props.operator.char)
    }>
     {props.operator.char}
      </button>
      </div>
  );
};

export default OperatorButton