import React from "react";
import { specials } from '../../../data';
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className='button specialButtons' onClick={()=>props.changeDisplay(props.special)}>
        {props.special}
      </button>
      }
    </>
  );
};

export default SpecialButton;