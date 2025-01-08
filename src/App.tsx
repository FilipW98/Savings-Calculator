import {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import { FormInputData } from './types';





function App() {

  const [formData, setFormData] = useState<FormInputData | null>(null); ;

	function dataHandler(data: FormInputData) {
		console.log('Dane z formularza: ', data);
	 
	}

  return (
		<>
			<Header />
			<Form onDataHandler={dataHandler} setFormData={setFormData} />
			<Table formData={formData} />
		</>
	);
}

export default App
