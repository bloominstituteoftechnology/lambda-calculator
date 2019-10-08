import React, {useState} from "react";

const Display = () => {
  const [number, setNumber] = useState(0);
  
  return <div className="display">{number}</div>;
};

export default Display;