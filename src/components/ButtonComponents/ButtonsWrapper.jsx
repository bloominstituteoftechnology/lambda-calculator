import React from 'react';
import Numbers from './NumberButtons/Numbers';
import Operators from './OperatorButtons/Operators';
import Specials from './SpecialButtons/Specials';

const ButtonsWrapper = (props) => {
    const { numbers, operators, specials } = props.data;

    return (
        <div>
            <Numbers num={numbers} />
            <Operators op={operators} />
            <Specials sp={specials} />
        </div>
    );
}

export default ButtonsWrapper;