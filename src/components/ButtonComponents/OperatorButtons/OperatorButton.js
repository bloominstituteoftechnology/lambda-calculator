import React from "react";

export const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button */}
      <button>{props.character}</button>;
    </>
  );
};
