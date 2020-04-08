import React from 'react';
import './App.css';
import { Header } from '../header/Header';
import {WeatherCard} from '../weather/WeatherCard';
import {Todo} from '../todo/Todo';
import Pomodoro from '../pomodoro/Pomodoro';
import Quotes from '../quotes/Quotes';
import Settings from '../settings/Settings';
import backgrounds from './background/Background';
// import GetWeather from '../../util/WeatherBit';
// import OpenWeather from '../../util/OpenWeather';

class App extends React.Component {


	toggleOnClickPomo() {
			if (document.querySelector(".pomoBox").classList.contains('show')) {
				document.querySelector(".pomoBox").classList.remove('show');
				setTimeout(()=>{
					document.querySelector('.pomoBox').style.display = 'none';
				}, 500)
			} else {
				document.querySelector('.pomoBox').style.display = 'block';
				setTimeout(()=>{
					document.querySelector(".pomoBox").classList.add('show');
				}, 10)
			}
	}

	toggleOnClickSettings() {
			if (document.querySelector(".settingsBox").classList.contains('show')) {
				document.querySelector(".settingsBox").classList.remove('show');
				setTimeout(()=>{
					document.querySelector('.settingsBox').style.display = 'none';
				}, 500)
			} else {
				document.querySelector('.settingsBox').style.display = 'flex';
				setTimeout(()=>{
					document.querySelector(".settingsBox").classList.add('show');
				}, 10)
			}
	}

	toggleOnClickTodo() {
		if (document.querySelector('.todoBox').classList.contains('show')) {
			document.querySelector(".todoBox").classList.remove('show');
			setTimeout(()=>{
				document.querySelector('.todoBox').style.display = 'none';
			}, 500)
		} else {
			document.querySelector('.todoBox').style.display = 'block';
			setTimeout(()=>{
				document.querySelector(".todoBox").classList.add('show');
			}, 10)
			
		}
	}


	// Change backgrounds
	componentWillMount() {
		const randomIndex = Math.floor(Math.random() * backgrounds.length);
		document.querySelector('.background').style.backgroundImage = "url('" + backgrounds[randomIndex] + "')";
		setTimeout(() => {document.querySelector('.background').style.display = 'block'}, 10);
		setTimeout(() => {document.querySelector('.background').style.opacity = 1}, 100);
	}

		
	render() {
	return (
		<div className="App" >
			<div className='topLeft'>
		 		<Pomodoro togglePomo={this.toggleOnClickPomo}/>
			</div>
			<div className='topRight'>
				<WeatherCard />
			</div>
			<div className='center'>
		 		<Header/>
		 	</div>
		 	<div className='bottomLeft'>
		 		<Settings toggleSettings={this.toggleOnClickSettings}/>
		 	</div>
		 	<div className='bottom'>
		 		<Quotes />
		 	</div>	
		 	<div className='bottomRight'>
		 		<Todo toggleTodo={this.toggleOnClickTodo}/>
		 	</div>
		</div>
		);
	}	
}

export default App;
