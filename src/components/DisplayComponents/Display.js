import React from "react";

const Display = (props) => {
  const { number } = props;

  return <div style={{background: 'grey', height: '50px', width: '150px', color: 'white', borderRadius: '25px'}} number={number} >{number || 0}</div>;
};

export default Display;