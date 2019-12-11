import React, {useState} from "react";

export const Display = (props) => {
  const [displayState, setDisplayState] = useState(props.initialValue);

  return <div className="display">{displayState}</div>;
};
