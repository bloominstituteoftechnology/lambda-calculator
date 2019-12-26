import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';

const Specials = () => {
  const [SpecButton] = useState(specials);

  console.log(SpecButton);

  return (
    <div className="specialB">
      {SpecButton.map( (speciaButton,index) =>{
        return <SpecialButton key={index} spButton={speciaButton}/>
      })}
     
    </div>
  );
};

export default Specials;