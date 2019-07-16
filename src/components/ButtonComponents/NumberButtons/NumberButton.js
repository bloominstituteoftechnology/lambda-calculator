import React, { useState } from "react";

const NumberButton = ({ number }) => {
  return <button key={number}>{number}</button>;
};

export default NumberButton;
