import React from "react";

const OperatorButton = props => {
  const { oper } = props;
  return <button className="opColors">{oper}</button>;
};

export default OperatorButton;
