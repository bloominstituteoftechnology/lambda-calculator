import React from "react";
import Operators from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [setOperators] = useState(operators)

  return (
    <div>
      {setOperators.map((item, index) => {
        return <OperatorButton key={index} item={item} />
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
