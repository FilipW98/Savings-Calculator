import { FormProps } from '../types';

function convertToCamelCase(str: string) {
	return str.replace(/-([a-z])/g, match => match[1].toUpperCase());
}

export default function Form({ setFormData }: FormProps) {
	
	function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const { id, value } = event.target;
		const camelCaseId = convertToCamelCase(id);
		const updatedValue = parseFloat(value);

		setFormData(prevData => {
			if (prevData) {
				return {
					...prevData,
					[camelCaseId]: updatedValue,
				};
			} else {
				return { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 };
			}
		});

	}

	return (
		<form id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initial-investment'>Initial investment</label>
					<input onChange={inputHandler} type='number' id='initial-investment' />
				</p>
				<p>
					<label htmlFor='annual-investment'>Annual Investment</label>
					<input onChange={inputHandler} type='number' id='annual-investment' />
				</p>
			</div>

			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>Expected return</label>
					<input onChange={inputHandler} type='number' id='expected-return' />
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>
					<input onChange={inputHandler} type='number' id='duration' />
				</p>
			</div>
		</form>
	);
}
