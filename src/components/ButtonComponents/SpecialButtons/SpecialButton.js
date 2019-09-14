import React from "react";

const SpecialButton = ({character,addCharacter}) => <button  onClick={addCharacter} className="btn btn-special">{character}</button> ;

export default SpecialButton;
