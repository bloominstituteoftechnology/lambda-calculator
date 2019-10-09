import React, { useState } from "react";
import { specials } from "../../../data";
//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = () => {
    // STEP 2 - add the imported data to state
    const [special, setSpecial] = useState(specials);
    return (
        <div>
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            {special.map((element, index) => (
                <SpecialButton key={index} special={element} />
            ))}
        </div>
    );
};
export default Specials;
