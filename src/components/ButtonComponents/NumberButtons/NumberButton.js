import React from "react";

 const NumberButton = (props) => {
    console.log("NumButton", props.changeData);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={ () =>{props.changeData(props.number)}}>{props.number}</button>
    </>
  );
};
export default NumberButton
