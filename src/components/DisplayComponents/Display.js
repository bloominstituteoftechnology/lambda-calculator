import React from "react";

const Display = (props) => {

  const displayArea = {
    backgroundColor: '#2D2829',
    width: '80%',
    margin: '0 auto',
    color: 'white',
    fontSize: '2rem',
    padding: '10px',
    textAlign: 'right',
    borderRadius: '30px'
  }
  return <div style={displayArea}>
  {props.number}
    
  </div>;
};

export default Display;
