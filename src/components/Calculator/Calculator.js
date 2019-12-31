import React, {useState} from 'react';
import Display from '../../components/DisplayComponents/Display';
import Numbers from '../../components/ButtonComponents/NumberButtons/Numbers'
import Operators from '../../components/ButtonComponents/OperatorButtons/Operators';
import Specials from '../../components/ButtonComponents/SpecialButtons/Specials';

const Calculator = (props) => {
  const [calcState, setCalcState] = useState('');
  const [displayState, setDisplayState] = useState('0');



  return (
    <>
      <div className="display-container">
        <Display value={displayState} calcState={calcState} />
      </div>
      <section className="buttons">
        <div>
          <Specials className='specials'/>
          <Numbers className='numbers' />
        </div>
        <div>
          <Operators className='operators'/>
        </div>
      </section>
    </>
  );
}
export default Calculator;