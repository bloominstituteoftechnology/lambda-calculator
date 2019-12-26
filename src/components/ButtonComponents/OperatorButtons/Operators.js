import React, {useState} from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {

  const [specialOperator] = useState(operators);
  return (
    <div className="operatorWrapper">
      {specialOperator.map((operat, index) =>{
        return <OperatorButton key={index} OperateButton={operat}/>
      })}
    </div>
  );
};

export default Operators;