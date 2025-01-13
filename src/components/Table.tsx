import { TableProps } from '../types';
import { formatter } from '../util/investment';

export default function Table({ formData }: TableProps) {
	let initialInvestment = Number(formData?.initialInvestment ?? 0);
	let expectedReturn = Number(formData?.expectedReturn ?? 0);
	let annualInvestment = Number(formData?.annualInvestment ?? 0);
	let duration = Number(formData?.duration ?? 1);

	const rows = [];
	let totalInterest = 0;
	let investedCapital = initialInvestment;
	let investmentValue = investedCapital;

	for (let year = 1; year <= duration; year++) {
		const interestYear = investedCapital * (expectedReturn / 100);
		totalInterest += interestYear;
		investedCapital += annualInvestment;
		investmentValue = investedCapital + totalInterest;

		rows.push(
			<tr key={year}>
				<th>{year}</th>
				<td>{formatter.format(investmentValue)}</td>
				<td>{formatter.format(interestYear)}</td>
				<td>{formatter.format(totalInterest)}</td>
				<td>{formatter.format(investedCapital)}</td>
			</tr>
		);
	}

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
				{rows}
			</tbody>
		</table>
	);
}
