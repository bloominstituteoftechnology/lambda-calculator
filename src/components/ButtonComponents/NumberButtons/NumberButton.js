import React from "react";

const NumberButton = (props) => {
  const {item} = props
  return (
    <button className='NumberButton'>{item} </button>
  );
}

// number.map(number => {
//   return <NumberButton className={number.value === '0' ? 'button zero button' : 'button'}>
// });
           /* Display a button element rendering the data being passed down from the parent container on props */
        
    
    
    export default NumberButton;
