import { TableProps } from '../types';
import { formatter } from '../util/investment';


export default function Table({ formData }: TableProps) {


	const initialInvestment = formatter.format(formData?.initialInvestment ?? 0);
	const annualInvestment = formatter.format(formData?.annualInvestment ?? 0);
	const expectedReturn = formatter.format(formData?.expectedReturn ?? 0);
	const duration = formatter.format(formData?.duration ?? 0);

	
	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>{formData ? initialInvestment : '0'}</td>
					<td>{formData ? annualInvestment : '0'}</td>
					<td>{formData ? expectedReturn : '0'}</td>
					<td>{formData ? duration : '0'}</td>
				</tr>
			</tbody>
		</table>
	);
}
