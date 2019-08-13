import React from "react";

const SpecialButton = (props) => {
  const {specials} = props;
  return (
    <>
      <button>{specials}</button>
    </>
  );
};

export default SpecialButton;