import React from "react";

const OperatorButton = ({character, addCharacter}) => <button  onClick={addCharacter} className="btn btn-operator">{character}</button> ;

export default OperatorButton;
