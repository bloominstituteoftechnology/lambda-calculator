import React from "react";

//  import styles 
import "./operatorButton.scss"

const OperatorButton = (props) => {

	const division = (n1, n2) => {
		return n1 / n2;
	}
	const multiply = (n1, n2) => {
		return n1 * n2;
	}
	const subtract = (n1, n2) => {
		return n1 - n2;
	}
	const add = (n1, n2) => {
		return n1 + n2;
	}

	const operatorClick = (char) => {
		// props.setCurrDisplay(char)

		if (char === "=") {
			console.log(props.operation);
			console.log(props.nums.num1);
			console.log(props.nums.num2);

			switch (props.operation) {
				case "/":
					props.setCurrDisplay(division(props.nums.num1, props.nums.num2))
					break;
				case "x":
					props.setCurrDisplay(multiply(props.nums.num1, props.nums.num2))
					break;
				case "-":
					props.setCurrDisplay(subtract(props.nums.num1, props.nums.num2))
					break;
				case "+":
					props.setCurrDisplay(add(props.nums.num1, props.nums.num2))
					break;

				default:
					console.log("ERROR!");
					break;
			}
		}

		props.setOperation(char);
	}

	// setCurrDisplay = { props.setCurrDisplay }

	return (
		<button onClick={() => operatorClick(props.operator.char)}>{props.operator.char}</button>
	);
};

export default OperatorButton;