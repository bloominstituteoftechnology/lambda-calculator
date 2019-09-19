import React, { useState } from "react";

const Display = (props) => {
  const [display, setDisplay] = useState(0);
  const { numbers } = props;
  
  return <div className="display">{display}</div>;
};
export default Display;