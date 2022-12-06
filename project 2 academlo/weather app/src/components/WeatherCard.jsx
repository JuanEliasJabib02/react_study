import React from 'react';
import { useState } from 'react';
const WeatherCard = ({ weather, temp }) => {
	const [isCelcius, setIsCelcius] = useState(true);

	const handleButton = () => {
		setIsCelcius(!isCelcius);
	};

	return (
		<article className='card'>
			<heade className='card__header'>
				<h1 className='card__title'>Weather App</h1>
				<h2 className='card__subtitle'>
					{weather?.name}, {weather?.sys.country}
				</h2>
			</heade>

			<section className='card__icon-container'>
				<img
					className='card__icon'
					src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
					alt=''
				></img>
				<h3 className='card__temp'>
					{isCelcius ? `${temp?.celcius} ºC` : `${temp?.farenheit}ºF`}
				</h3>
			</section>

			<section className='card__info'>
				<h3 className='card__description'></h3>
				<ul>
					<li className='card__item'>
						<span className='card__spam'>Wind speed</span> {weather?.wind.speed}
						m/s
					</li>
					<li className='card__item'>
						<span className='card__spam'>Clouds</span> {weather?.clouds.all}%
					</li>
					<li className='card__item'>
						<span className='card__spam'>Pressure </span>
						{weather?.main.pressure} hPa
					</li>
				</ul>
			</section>
			<footer className='card__footer'>
				<button onClick={handleButton} className='card__btn'>
					<h3 className='card__temp'>Change to {isCelcius ? 'ºF' : 'ºC'}</h3>
				</button>
			</footer>
		</article>
	);
};

export default WeatherCard;
