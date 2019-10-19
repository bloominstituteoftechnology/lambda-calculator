import React, { useState } from "react";
import ButtonMaker from '../ButtonMaker'
import { operators } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operator, setOperator] = useState(operators)
  console.log(`Operators: Data from State`, operator)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operator.map((value, index) => {
           return <ButtonMaker 
            key={`${value} ${index}`}
            buttonLabel={value.value}
            />
         })
       }
    </div>
  );
};

export default Operators