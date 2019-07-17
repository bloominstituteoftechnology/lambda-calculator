import React from "react";

function SpecialButton({ spec }) {
  return <button key={spec}>{spec}</button>;
}

export default SpecialButton;
