import React, {useState} from "react";

const Display = () => {
  const [display, setDisplay] = useState(0);
  const displayStyle = {
    margin: 'auto',
    display: 'block',
    background: 'darkgrey',
    width: '375px',
    height: '90px',
    borderRadius: '50px'
  }
  return <div style={displayStyle}>{display}</div>;
};

export default Display;