import React from "react";

const NumberButton = (props) => {
  //console.log('numberbtn', props);
  return (
    <div className='numberButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.addNumber(props.text)}>
        {props.text}
      </button>
    </div>
  );
};

export default NumberButton;