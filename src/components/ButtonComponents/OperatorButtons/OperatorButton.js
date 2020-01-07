import React from 'react';

const OperatorButton = (props) => {
	return (
		<div className={`o${props.id}`}>
			<button
				className="opButton"
				onClick={() => {
					{
						if (props.ops.value === '+') {
							props.setCalc(props.calc + ' + ');
						} else if (props.ops.char === 'x') {
							props.setCalc(props.calc + ' * ');
						} else if (props.ops.value === '/') {
							props.setCalc(props.calc + ' / ');
						} else if (props.ops.value === '-') {
							props.setCalc(props.calc + ' - ');
						} else if (props.ops.value === '=') {
							props.setCalc(eval(props.calc));
							setTimeout(() => {
								props.setCalc('');
							}, 5000);
						}
					}
				}}
			>
				{props.ops.char}
			</button>
		</div>
	);
};

export default OperatorButton;

/* Display a button element rendering the data being passed down from the parent container on props */
