import React, {useState, useEffect} from "react";

const OperatorButton = (props) => {
  const [symState, setSymState] = useState(0);

  const symClick = (e)=>{
    const displayValue = e.target.textContent;
    setSymState(props.symbol.value);
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="symbol_Button btn" onClick={symClick}>{props.symbol.char}</button>
    </>
  );
};
export default OperatorButton;
