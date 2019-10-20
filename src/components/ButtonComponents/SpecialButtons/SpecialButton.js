import React from "react";


const SpecialButton = (special, onClickSpecial) => {

  function onClick() {
    onClickSpecial(special)
  }

  return (
    <button className="button special" key={special} onClick={onClick}>

      {special}
    </button>
  );
};

export default SpecialButton;