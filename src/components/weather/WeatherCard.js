import React from 'react';
import './WeatherCard.css';


export class WeatherCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: undefined,
			temp: undefined,
			icon: undefined,
			weatherList: false,
		}

	}

	async componentDidMount() {
	const cityId = '2158177';
	const apiKey = '817aa5717dafc394955e8b4b98539abc';
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`);
		if (response.ok) {
			// console.log(response);
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			return this.setState({
				name: jsonResponse.name,
				temp: Math.round(jsonResponse.main.temp),
				icon: `https://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}.png`
			});
		}
	} catch(error) {
		console.log(error)
		}
	}	

	// handleMoreWeather() {
	// 	if (this.state.weatherList === false) {
	// 		document.querySelector('.moreWeather').style.opacity = '1';
	// 		this.setState({weatherList: true});
	// 	} else {
	// 		document.querySelector('.moreWeather').style.opacity = '0';
	// 		this.setState({weatherList: false});
	// 	}
	// }


	render() {
		let display
		if (this.state.icon === undefined) {
			display = 
			<div className='card'>
				Loading...
			</div>
		} else {

			display = (
				<div className='card'>
					<div className='box'>
						<img src={this.state.icon} alt='rain' />
						<p>{this.state.temp}°</p>
					</div>
					<h4>{this.state.name}</h4>
					<div className='moreWeather'>
					</div>
				</div>
				)
			
		}
		
		return(
			<div>
				{display}
			</div>
		)
	}
}