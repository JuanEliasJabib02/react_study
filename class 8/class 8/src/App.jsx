import { useState } from 'react';
import axios from "axios";
import './App.css';
import { useEffect } from 'react';

function App() {

	

	const [countries, setCountries] = useState()


	/** DEPLOY THE INFO IN A DYNAMIC WAY
	 * 
	 * -FLAG
	 * -COUNTRY NAME
	 * -CAPITAL
	 */

	useEffect(() => {
		const URL = "https://restcountries.com/v3.1/lang/spa"

		axios.get(URL)
			.then(res => setCountries(res.data))
			.catch(err => console.log(err))
	},[])

	console.log(countries)


	
	return (
		<div className='App'>
			<h1>List and Keys 2</h1>
		</div>
	) 
}

export default App;
