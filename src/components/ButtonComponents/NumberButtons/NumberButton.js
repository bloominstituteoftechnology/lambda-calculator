import React from "react";

export const NumberButton = (props) => {
  if (props.num != 0) {
    return (
      <>
        <button className="number-button">
          {props.num}
        </button>
      </>
    );
  } else {
    return (
      <button className="number-button-zero">
        {props.num}
      </button>
    );
  }
};