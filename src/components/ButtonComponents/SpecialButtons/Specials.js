import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = (props) => {

  return (
    <div className='upperContainer'>
      {
        specials.map(special => SpecialButton(special, props.onClickSpecial))
      }
    </div>
  );
};

export default Specials;