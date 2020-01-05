import React, {useState, useEffect} from "react";

const NumberButton = (props) => {
  const [numState, setNumState] = useState(0);
  //console.log(props);
  const numBtnClick = (e)=>{
    const displayValue = e.target.textContent;
    setNumState(displayValue);
  }
  return (
    <>
    <button className="number_Button" onClick={numBtnClick}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
