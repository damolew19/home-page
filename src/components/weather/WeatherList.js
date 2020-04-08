import React from 'react';
import {WeatherCard} from './WeatherCard'
import './WeatherList.css';

export const WeatherList = (props) => {
	return (
		<div className='container'>
			<div className='list'>
				{ 
					props.weatherWeek.map(weather => {
						return <WeatherCard weather={weather} />
					})
				}
			</div>
		</div>
		)
}