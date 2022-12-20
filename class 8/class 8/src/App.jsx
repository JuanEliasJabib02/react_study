import { useState } from 'react';
import axios from "axios";
import './App.css';
import { useEffect } from 'react';
import Country from './components/Country';

function App() {

	

	const [countries, setCountries] = useState()

	const [inputText, setInputText] = useState("spa")




	useEffect(() => {
		const URL = `https://restcountries.com/v3.1/lang/${inputText}`

		axios.get(URL)
			.then(res => setCountries(res.data))
			.catch(err => console.log(err))
	},[inputText])


	const handleSubmit = (e) => {
		e.preventDefault()
		setInputText(e.target.input_text.value)
	}

	
	return (
		<div className='App'>

			<form onSubmit={handleSubmit}>
				<input type="text" name="input_text" id="input_text" />
				<button>search</button>
			</form>
			{
				countries?.map(country => (
					< Country
						country={country}
						key={country.population}
					/>
				))
			}
		</div>
	) 
}

export default App;
