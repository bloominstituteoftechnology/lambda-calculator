import React from "react";

const NumberButton = (props) => {

	const numClick = (numb) => {
		console.log(props.operation);
		
		if (props.operation === null) {
			props.setNum1(Number(props.nums.num1 + numb));
			props.setCurrDisplay(Number(props.nums.num1 + numb))
		} else {
			props.setNum2(Number(props.nums.num2 + numb));
			props.setCurrDisplay(Number(props.nums.num2 + numb))
		}
	}

	return (
		<button onClick={() => numClick(props.number)} className={props.number === "0" ? "zero" : ""}>{props.number}</button>
	);
};

export default NumberButton;