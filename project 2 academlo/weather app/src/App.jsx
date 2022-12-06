import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
	const [weather, setWeather] = useState();
	const [coords, setCoords] = useState();

	const [temp, setTemp] = useState({});

	const success = pos => {
		setCoords({
			lat: pos.coords.latitude,
			lon: pos.coords.longitude,
		});
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	useEffect(() => {
		if (coords) {
			const lat = coords.lat;
			const lon = coords.lon;
			const apiKey = '85787b401d5f7ffcd95ccde1def50231';
			const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
			axios
				.get(URL)
				.then(res => {
					setWeather(res.data);
					const celcius = (res.data.main.temp - 273).toFixed(1);
					const farenheit = (celcius * (9 / 5) + 32).toFixed(1);
					setTemp({ celcius, farenheit });
					0.15;
				})
				.catch(err => console.log(err));
			return;
		}
	}, [coords]);

	return (
		<div className='App'>
			<WeatherCard weather={weather} temp={temp} />
		</div>
	);
}

export default App;
