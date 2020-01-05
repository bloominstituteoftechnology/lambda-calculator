import React, {useState, useEffect} from "react";

const SpecialButton = (props) => {
  const [specButton, setSpecButton] = useState(0);

  const specButtonClick = (e)=>{
    const displayValue = e.target.textContent;
    setSpecButton(displayValue);
    console.log(displayValue);
  }
  return (
    <>
    <button className="special_Button" onClick={specButtonClick}>
      {props.specialSymbol}
      </button>
    </>
  );
};
export default SpecialButton;
