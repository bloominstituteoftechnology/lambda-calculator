import React from "react";
import {specials} from "../../../data"
import Specials from "./Specials"

const SpecialButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Specials data={specials} />
    </div>
  );
};

export default SpecialButton;