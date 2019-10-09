import React from "react";

const SpecialButton = ({ callback, special }) => {
  return (
    <div className="special" onClick={() => callback(special)}>
      {special}
    </div>
  );
};

export default SpecialButton;