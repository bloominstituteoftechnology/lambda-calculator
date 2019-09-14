import React from 'react';
import Numbers from './NumberButtons/Numbers';
import Operators from './OperatorButtons/Operators';
import Specials from './SpecialButtons/Specials';

const ButtonsWrapper = ({addCharacter,setTotal}) => {
    return (
        <div className="buttonsContainer">
            <div>
                <Specials addCharacter={addCharacter} setTotal={setTotal} />
                <Numbers addCharacter={addCharacter} />
            </div>
            <Operators addCharacter={addCharacter} />
        </div>
    );
};

export default ButtonsWrapper;