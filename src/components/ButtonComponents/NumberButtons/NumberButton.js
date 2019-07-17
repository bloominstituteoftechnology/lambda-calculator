import React from "react";

function NumberButton({ change, number }) {
  if (number === "0") {
    return (
      <button
        className="num-button zero-button"
        key={number}
        onClick={() => change(number)}
      >
        {number}
      </button>
    );
  } else {
    return (
      <button
        className="num-button"
        key={number}
        onClick={() => change(number)}
      >
        {number}
      </button>
    );
  }
}

export default NumberButton;
