import React from "react";
import "./Display.module.css";

const Display = (props) => {
  return(  
  <div className="display">{props.data}</div>
  );
};
export default Display;
