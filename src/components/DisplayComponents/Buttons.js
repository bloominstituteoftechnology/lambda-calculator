import React from "react";
import Numbers from '../ButtonComponents/NumberButtons/Numbers'; // Importing default export of the {Numbers} component
import Operators from '../ButtonComponents/OperatorButtons/Operators'; // Importing default export of the {Operators} component
import Specials from '../ButtonComponents/SpecialButtons/Specials'; // Importing default export of the {Specials} component

const Buttons = () => {
  const style_ButtonsContainer = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '500px',
    width: '100%',
    margin: '25px',
  }

  return <div style={style_ButtonsContainer}>
    <Numbers />
    <Operators />
    <Specials />
  </div>;
};

// Exporting the {Buttons} component using the `export` keyword
export default Buttons;