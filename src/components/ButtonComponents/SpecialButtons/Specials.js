import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import data from "../../../data";

//import any components needed

//Import your array data to from the provided data file


const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specState] = useState(data.specials);
  console.log(specState);



  return (
    <div class="specials-container">
    
       {specState.map((specChar,index) => {

        return <SpecialButton char={specChar} key={index}/>

       })}

    </div>
  );
};

export default Specials;