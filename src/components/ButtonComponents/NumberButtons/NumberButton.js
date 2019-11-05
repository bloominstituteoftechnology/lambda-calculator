import React from "react";
import {numbers} from '../../../data';

const NumberButton = (props) => {
  return (
    <>
      /* Display a button element rendering the data being passed down from the parent container on props */
      <button>
      {props.num}
      </button>
    </>
  );
};


export default NumberButton;