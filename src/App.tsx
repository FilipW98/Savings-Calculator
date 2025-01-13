import {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import { FormInputData } from './types';


function App() {

	const [formData, setFormData] = useState<FormInputData | null>({
		initialInvestment: 0,
		expectedReturn: 0,
		annualInvestment: 0,
		duration: 1,
	}); ;

  return (
		<>
			<Header />
			<Form  setFormData={setFormData} />
			<Table formData={formData} />
		</>
	);
}

export default App
