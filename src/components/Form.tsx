export default function Form() {
	return (
		<div className='' id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initial-investment'>Initial investment</label>
					<input type='text' id='initial-investment' />
				</p>
				<p>
					<label htmlFor='annual-investment'>Annual Investment</label>
					<input type='text' id='annual-investment' />
				</p>
			</div>

			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>Expected return</label>
					<input type='text' id='expected-return' />
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>
					<input type='text' id='duration' />
				</p>
			</div>
		</div>
	);
}
