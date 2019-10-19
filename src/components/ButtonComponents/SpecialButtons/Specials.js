import React,  { useState } from "react";
import ButtonMaker from '../ButtonMaker'
import { specials } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [button, setButton] = useState(specials)
  console.log(`Specials: Data from state`, button)
  return (
    <div>
      {
        button.map((value, index) => {
          return <ButtonMaker onClick={console.log('i was clicked Specials Button')}
              key={index}
              buttonLabel={value}
            />
        })
      }
    </div>
  );
};

export default Specials