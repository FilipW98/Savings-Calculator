import { FormInputData } from '../types';

export function calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }: FormInputData) {
	const annualData = [];
	let investmentValue = initialInvestment;

	for (let i = 0; i < duration; i++) {
		const interestEarnedInYear = investmentValue * (expectedReturn / 100);
		investmentValue += interestEarnedInYear + annualInvestment;
		annualData.push({
			year: i + 1,
			interest: interestEarnedInYear,
			valueEndOfYear: investmentValue,
			annualInvestment: annualInvestment,
		});
	}

	return annualData;
}

export const formatter = new Intl.NumberFormat('pl-PL', {
	style: 'currency',
	currency: 'PLN',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});


