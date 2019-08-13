import React from "react";

const Display = () => {
  const style_Display = {
    margin: 'auto',
    display: 'block',
    background: '#24292e',
    width: '375px',
    height: '90px',
    borderRadius: '50px'
  }

  return <div style={style_Display}>{/* Display any props data here */}</div>;
};

// Exporting the {Display} component using the `export` keyword
export default Display;