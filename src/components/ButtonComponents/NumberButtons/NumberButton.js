import React from "react";
/*style sheets inside the folder! so under NumButt created NumButt.css & import HERE using --->import './NumberButtons.css' */
const NumberButton = (props) => {
  return (
    <div>
      {props.numContent}
    </div>
  );
};

export default NumberButton;

/*then see acutal number values, then at that point it's up to styling*/ 