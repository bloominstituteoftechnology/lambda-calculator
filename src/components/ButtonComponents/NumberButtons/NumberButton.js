import React from 'react';

const NumberButton = (props) => {
	return (
		<div className={`n${props.id}`}>
			<button
				className={`numButton n${props.id}`}
				onClick={(event) => {
					switch (props.num) {
						case '1':
							props.setCalc(props.calc + 1);
							break;
						case '2':
							props.setCalc(props.calc + 2);
							break;
						case '3':
							props.setCalc(props.calc + 3);
							break;
						case '4':
							props.setCalc(props.calc + 4);
							break;
						case '5':
							props.setCalc(props.calc + 5);
							break;
						case '6':
							props.setCalc(props.calc + 6);
						case '7':
							props.setCalc(props.calc + 7);
							break;
						case '8':
							props.setCalc(props.calc + 8);
							break;
						case '9':
							props.setCalc(props.calc + 9);
							break;
						case '0':
							props.setCalc(props.calc + 0);
							break;
						case '.':
							props.setCalc(props.calc + '.');
							break;
					}
				}}
			>
				{props.num}{' '}
			</button>
		</div>
	);
	// {/* Display a button element rendering the data being passed down from the parent container on props */}
};

export default NumberButton;
