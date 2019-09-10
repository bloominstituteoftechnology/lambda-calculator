import React, {useState} from "react";
import {specials} from '../../../data';


const SpecialButton = () => {
  const {character, saveSpecial} = useState(specials);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <div>
      {/* <button onClick ={() => saveSpecial(character)} character = {character}>{character}</button> */}
    </div>
    </>
  );
};

export default SpecialButton;