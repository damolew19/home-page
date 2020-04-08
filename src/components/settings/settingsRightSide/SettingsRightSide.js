import React from 'react';
import './SettingsRightSide.css';

class SettingsRightSide extends React.Component {
	constructor() {
		super()
		this.state = {
			togglePomodoro: true,
			toggleWeather: true,
			toggleQuotes: true,
			toggleTodo: true,
			toggleSeconds: true,
			toggleDate: false
		}

		this.handlePomodoro = this.handlePomodoro.bind(this);
		this.handleWeather = this.handleWeather.bind(this);
		this.handleQuotes = this.handleQuotes.bind(this);
		this.handleTodo = this.handleTodo.bind(this);
		this.handle24hrOption = this.handle24hrOption.bind(this);
		this.handle12hrOption = this.handle12hrOption.bind(this);
		this.handleSeconds = this.handleSeconds.bind(this);
		this.handleDate = this.handleDate.bind(this);
	}

	handlePomodoro() {
		if (this.state.togglePomodoro === true){
			this.setState({togglePomodoro: false});
			document.querySelector('.pomoIcon').style.opacity = '0'
			document.querySelector('.togglePomodoro input').classList.remove('checked')
			setTimeout(() => {
				document.querySelector('.pomoIcon').style.display = 'none'
			}, 500)
		} else {
			this.setState({togglePomodoro: true});
			document.querySelector('.pomoIcon').style.display = 'block'
			document.querySelector('.togglePomodoro input').classList.add('checked')
			setTimeout(() => {
				document.querySelector('.pomoIcon').style.opacity = '1'
			}, 10)
		}
	}

	handleWeather() {
		if (this.state.toggleWeather === true){
			this.setState({toggleWeather: false});
			document.querySelector('.card').style.opacity = '0'
			document.querySelector('.toggleWeather input').classList.remove('checked')
			setTimeout(() => {
				document.querySelector('.card').style.display = 'none'
			}, 500)
		} else {
			this.setState({toggleWeather: true});
			document.querySelector('.card').style.display = 'block'
			document.querySelector('.toggleWeather input').classList.add('checked')
			setTimeout(() => {
				document.querySelector('.card').style.opacity = '1'
			}, 10)
		}
	}

	handleQuotes() {
		if (this.state.toggleQuotes === true){
			this.setState({toggleQuotes: false});
			document.querySelector('.quoteBox').style.opacity = '0'
			document.querySelector('.toggleQuotes input').classList.remove('checked')
			setTimeout(() => {
				document.querySelector('.quoteBox').style.display = 'none'
			}, 500)
		} else {
			this.setState({toggleQuotes: true});
			document.querySelector('.quoteBox').style.display = 'block'
			document.querySelector('.toggleQuotes input').classList.add('checked')
			setTimeout(() => {
				document.querySelector('.quoteBox').style.opacity = '1'
			}, 10)
		}
	}

	handleTodo() {
		if (this.state.toggleTodo === true){
			this.setState({toggleTodo: false});
			document.querySelector('.todo').style.opacity = '0'
			document.querySelector('.toggleTodo input').classList.remove('checked')
			setTimeout(() => {
				document.querySelector('.todo').style.display = 'none'
			}, 500)
		} else {
			this.setState({toggleTodo: true});
			document.querySelector('.todo').style.display = 'block'
			document.querySelector('.toggleTodo input').classList.add('checked')
			setTimeout(() => {
				document.querySelector('.todo').style.opacity = '1'
			}, 10)
		}
	}

	handle24hrOption() {
		document.querySelector('#hr24').style.opacity = '1';
		document.querySelector('#hr12').style.opacity = '0.5';
		document.querySelector('.hours12').style.display = 'none'
		document.querySelector('.hours').style.display = 'block'
	}

	handle12hrOption() {
		document.querySelector('#hr12').style.opacity = '1';
		document.querySelector('#hr24').style.opacity = '0.5';
		document.querySelector('.hours12').style.display = 'block'
		document.querySelector('.hours').style.display = 'none'
	}

	handleSeconds() {
		if (this.state.toggleSeconds === true){
			this.setState({toggleSeconds: false});
			document.querySelector('.toggleSeconds input').classList.remove('checked')
			document.querySelector('.seconds').style.display = 'none'
		} else {
			this.setState({toggleSeconds: true});
			document.querySelector('.toggleSeconds input').classList.add('checked')
			document.querySelector('.seconds').style.display = 'block'
		}
	}

	handleDate() {
		const date = document.querySelector('.date');
		const toggleChecked = document.querySelector('.toggleDate input')
		if (this.state.toggleDate === true) {
			this.setState({
				toggleDate: false
			})
			date.style.display = 'none';
			toggleChecked.classList.remove('checked')

		} else {
			this.setState({
				toggleDate: true
			})
			date.style.display = 'flex';
			toggleChecked.classList.add('checked')
		}
	}

	render() {
		return(
			<div className='rightSide'>
					<div className='general selectedOptions'>
						<div className='optionsHeading'>
							<h1>General</h1>
							<p>Customize your dashboard</p>
						</div>
						<div className='display'>
							<h4>Display</h4>
							<div className='selectedOptionsItem togglePomodoro'>
								<span>Pomodoro</span>
								<label className='toggleSwitch'>
									<input className='checked' type='checkBox' onClick={this.handlePomodoro}/>	
									<span className='slider'></span>
								</label>
							</div>
							<div className='selectedOptionsItem toggleWeather'>
								<span>Weather</span>
								<label className='toggleSwitch'>
									<input className='checked' type='checkBox' onClick={this.handleWeather}/>	
									<span className='slider'></span>
								</label>
							</div>
							<div className='selectedOptionsItem toggleQuotes'>
								<span>Quotes</span>
								<label className='toggleSwitch'>
									<input className='checked' type='checkBox' onClick={this.handleQuotes}/>	
									<span className='slider'></span>
								</label>
							</div>
							<div className='selectedOptionsItem toggleTodo'>
								<span>Todo</span>
								<label className='toggleSwitch'>
									<input className='checked' type='checkBox' onClick={this.handleTodo}/>	
									<span className='slider'></span>
								</label>
							</div>
						</div>
						<div className='timeOptions'>
							<h4>Time Options</h4>
							<div className='selectedOptionsItem clockFormat'>
								<span>Clock Format</span>
								<div className='toggleOptions'>
									<span id='hr12' onClick={this.handle12hrOption}>12 Hour</span>
									<span> | </span>
									<span id='hr24' onClick={this.handle24hrOption}>24 Hour</span>
								</div>
							</div>
							<div className='selectedOptionsItem toggleSeconds'>
								<span>Show Seconds</span>
								<label className='toggleSwitch'>
									<input className='checked' type='checkBox' onClick={this.handleSeconds}/>	
									<span className='slider'></span>
								</label>
							</div>
							<div className='selectedOptionsItem toggleDate'>
								<span>Show Date</span>
								<label className='toggleSwitch' >
									<input  type='checkBox' onClick={this.handleDate}/>	
									<span className='slider'></span>
								</label>
							</div>
						</div>
					</div>
					<div className='backgrounds selectedOptions'>
						<div className='optionsHeading'>
							<h1>Backgrounds</h1>
							<p>Choose your scenery</p>
						</div>
					</div>
					<div className='quotes selectedOptions'>
						<div className='optionsHeading'>
							<h1>Quotes</h1>
							<p>Find some inspiration</p>
						</div>
					</div>
			</div>
		);
	}
}


export default SettingsRightSide;