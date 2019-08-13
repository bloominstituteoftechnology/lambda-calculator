import React, { useState } from "react";
import { operators } from '../../../data.js';
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file


const Operators = () => {

  
  
  return (

    <div className='col2'> {
      operators.map((operator) => {
        return <OperatorButton operator= {operator} />
      }

      )}

    </div>
  );
};

export default Operators;

