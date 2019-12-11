import React from "react";


const OperatorButton = (props) => {
  console.log(props.operator)
  return (
    <div className = "operatorButtonDiv">
    <button class="operatorButton">
     {props.operator.char}
      </button>
      </div>
  );
};

export default OperatorButton