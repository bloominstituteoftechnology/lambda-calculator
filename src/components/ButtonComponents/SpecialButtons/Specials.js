import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';

export default function Specials (){
  
  const [specialState,setSpecialState]=useState(specials)

  return (
    <div>
    {
     specialState.map((special,index)=>
       <specialButton 
       key={index}
      buttonTextSpecials={special}/>
  )}
</div>
  );
};
