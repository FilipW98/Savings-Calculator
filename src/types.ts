
export interface FormInputData {
	initialInvestment: number;
	annualInvestment: number;
	expectedReturn: number;
	duration: number;
}

export interface TableProps {
	formData: FormInputData | null;
}

export interface FormProps {
	setFormData: React.Dispatch<React.SetStateAction<FormInputData | null>>;
}