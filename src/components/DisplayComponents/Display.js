import React from "react";
const container = {
  display: 'flex',
  fontSize: '40px',
  display: 'block',
  float: 'left',
  width: '400px',
  paddingTop: '5%',
  paddingBottom: '5%',
  lineHeight: '1em',
  marginTop: '-0.5em',
  backgroundColor: 'black',
  color: 'white',
  marginLeft: '10px',
  marginTop: '10px',
  textAlign: 'right',
  borderRadius: '30%',
}

const Display = () => {
  return <div style={container}>{0/* Display any props data here */}</div>;
};
export default Display;