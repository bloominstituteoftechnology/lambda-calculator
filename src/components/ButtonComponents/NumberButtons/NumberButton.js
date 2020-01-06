import React, {useState, useEffect} from "react";

const NumberButton = (props) => {
  const [numState, setNumState] = useState(0);
  //console.log(props);
  const numBtnClick = (e)=>{
    const displayValue = e.target.textContent;
    setNumState(props.input);
    console.log(displayValue);
  }
  return (
    <>
    <button className="number_Button btn" onClick={props.updateDisplay}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
