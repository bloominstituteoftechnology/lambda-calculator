import React from "react";

const NumberButton = (props) => {
  const {item} = props
  return (
  
    // <button onClick{() => props.addNumber(props.text)}>
    // {props.text}
    // </button>
  
    <button className='NumberButton'>{item}</button>
  )
};

// number.map(number => {
//   return <NumberButton className={number.value === '0' ? 'button zero button' : 'button'}>
// });
           /* Display a button element rendering the data being passed down from the parent container on props */
    
    export default NumberButton;

    // const NumberButton = (props => {
    //   return (
    //     <button>
    //       {props.text}
    //     </button>
    //   );
    // });
