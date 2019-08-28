import React, {useState} from "react";
import NumberButton from './NumberButton.js'
//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../../src/data.js'


const Numbers = (props) => {
  console.log(props)
  const [buttonNumber, setButtonNumber] = useState(numbers);
  return (
    <div>
      {buttonNumber.map(xNumb => <NumberButton key={xNumb} text={xNumb} pushNumb={props.pushNumb}/>
    )}
    </div>
  );
};



export default Numbers;