import React from "react";
import OperatorButton from "../OperatorButtons/OperatorButton";
import {  operators } from "../../../data";

// //import any components needed

// //Import your array data to from the provided data file

// const Operators = ({ updateValue }) => {
//   // STEP 2 - add the imported data to state
//   const [OperatorsState] = useState(operators);
//   return (
//     <div>
//         {OperatorsState.map((operator, index) => (
//         <OperatorButton key={index} operator={operator} clickOperatorBtn={() => updateValue(operator)} />
//        ))}
//     </div>
//   );
// };

// export default Operators;


const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operator => <OperatorButton operator={operator}
                                                  addOperator={props.addOperator}
      />)}
    </div>
  );
};

export default Operators;