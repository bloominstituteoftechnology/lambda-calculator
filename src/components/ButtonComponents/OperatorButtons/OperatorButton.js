import React from "react";

const OperatorButton = (props) => {
  function updateValue() {
    if (props.symbol !== '=') {
      console.log(props.displayResult);
      return props.setDisplayResult(props.displayResult+props.value);
    }
    else {
      console.log(props.displayResult);
      let result = props.displayResult;
      let result2 = eval(result);
      console.log("result:"+result2);
      let resultString = result2.toString();
    
      return props.setDisplayResult(resultString);
    }
  }
  return (
    <button className="operator-button" onClick={() => updateValue()}>{props.symbol}</button>
  );
};

export default OperatorButton;