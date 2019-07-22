import React from "react";
const container = {
  fontSize: '40px',
  display: 'block',
  float: 'left',
  width: '420px',
  paddingTop: '5%',
  paddingBottom: '5%',
  lineHeight: '1em',
  backgroundColor: 'black',
  color: 'white',
  marginLeft: '10px',
  marginTop: '10px',
  textAlign: 'right',
  borderRadius: '30%',
}

const Display = props => {
  return <div  style={container} className='display'>{props.dispDataD}</div>
};
export default Display;
