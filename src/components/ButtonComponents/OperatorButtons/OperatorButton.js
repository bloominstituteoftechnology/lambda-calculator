import React from "react";

// const OperatorButton = props => {
//   return (
//     <>
//     <button onClick={props.clickOperatorBtn}>
//         {props.operator.value}
//       </button>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };

const OperatorButton = props => {
  return (
    <button className="operator-button"onClick={() => props.addOperator(props.operator.value)}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;