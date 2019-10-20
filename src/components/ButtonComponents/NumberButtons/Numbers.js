import React from "react";
import NumberButton from "./NumberButton";

import { numbers } from "../../../data";

const Numbers = (props) => {

  return (
    <div className="lowerContainer">
      {
        numbers.map(number => NumberButton(number, props.onClickNumber))
      }
    </div>
  );
};

export default Numbers;