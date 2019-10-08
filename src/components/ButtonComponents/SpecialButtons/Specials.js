import React from "react";
import React, {useState} from 'react';
import SpecialButton from '../SpecialButtons';
import {specials} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [specialData] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       specialData.map ((data, index)=> (
        //  <SpecialButton key={index} notSureWhatToDoHere={data.??}/>
       ))
       
       
       }
    </div>
  );
};
