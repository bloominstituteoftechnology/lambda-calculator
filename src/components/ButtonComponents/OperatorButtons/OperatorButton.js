import React from "react";

const OperatorButton = (props) => {
  console.log(props)
  const { item } = props
  return (
    <button className='OperatorButton'>{item.char} </button>
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
  );
};

export default OperatorButton