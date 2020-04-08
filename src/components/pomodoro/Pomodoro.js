import React from 'react';
import './Pomodoro.css';
import PomoSettings from './pomoSettings/PomoSettings.js';
import pomodoroIcon from './pomodoroIcon.png';
import moreIcon from './more.png';
import fullScreenIcon from './fullScreenIcon.png';

class Pomodoro extends React.Component {
	constructor(){
		super();
		this.state = {
			timerSecond: 0,
			cycle: 'work',
			workTime: 25,
			breakTime: 5,
			currentTime: '25:00',
			timerRunning: false,
			settings: false,
			fullScreen: false
		};
		this.toggleSettings = this.toggleSettings.bind(this);
		this.incrementBreakTime = this.incrementBreakTime.bind(this);
		this.decrementBreakTime = this.decrementBreakTime.bind(this);
		this.incrementWorkTime = this.incrementWorkTime.bind(this);
		this.decrementWorkTime = this.decrementWorkTime.bind(this);
		this.handleStartButton = this.handleStartButton.bind(this);
		this.toggleFullScreen = this.toggleFullScreen.bind(this);
		
		// this.startTimer = this.startTimer.bind(this);
	}
	
	toggleSettings() {
		if (this.state.settings === false) {
			this.setState({settings: true})
			document.querySelector('.pomoSettingsBox').style.display ='block';
			console.log(this.state)
		} else {
			this.setState({settings: false})
			document.querySelector('.pomoSettingsBox').style.display='none';
			//Adjust any updates on time displayed
			if (this.state.cycle === 'work') {
				this.setState({currentTime: this.state.workTime + ':00'});
			} else {
				this.setState({currentTime: this.state.breakTime +':00'});
			}
			console.log(this.state)
		}
	}

	toggleFullScreen() {
		const elements = document.querySelectorAll('.pomoIcon, .topRight, .header, .bottomLeft, .bottom, .bottomRight');
		if (this.state.fullScreen === false) {
			this.setState({fullScreen: true});
			document.querySelector('.pomoBox').style.width = '100vw';
			document.querySelector('.pomoBox').style.height = '100vh';
			document.querySelector('.pomoBox').style.top = '0';
			document.querySelector('.pomoBox').style.left = '0';
			document.querySelector('.pomoBox').style.zIndex = '9999';
			document.querySelector('.pomoBox').style.borderRadius = '0%';
			document.querySelector('.countDownRing').style.width = '250px';
			document.querySelector('.countDownRing').style.height = '250px';
			document.querySelector('.pomoSettingsBox').style.height = '100%';
			document.querySelector('.pomoSettingsBox').style.width = '25%';
			//Turn on fullscreen
			for (let i=0; i<elements.length; i++) {
				elements[i].style.opacity = '0';
			}
		} else {
			this.setState({fullScreen: false});
			document.querySelector('.pomoBox').style.width = '250px';
			document.querySelector('.pomoBox').style.height = '300px';
			document.querySelector('.pomoBox').style.top = '35px';
			document.querySelector('.pomoBox').style.left = '25px';
			document.querySelector('.pomoBox').style.zIndex = '4';
			document.querySelector('.pomoBox').style.borderRadius = '10%';
			document.querySelector('.countDownRing').style.width = '175px'
			document.querySelector('.countDownRing').style.height = '175px'
			document.querySelector('.pomoSettingsBox').style.height = '100%';
			document.querySelector('.pomoSettingsBox').style.width = '100%';
			//turn off fullscreen
			for (let i=0; i<elements.length; i++) {
				elements[i].style.opacity = '1';
			}
		}
	}

	incrementBreakTime() {
		if(this.state.timerRunning === false) {
			this.setState({breakTime: this.state.breakTime + 1})
		}
	}

	decrementBreakTime() {
		if(this.state.timerRunning === false) {
			this.setState({breakTime: this.state.breakTime - 1})	
		}
	}

	incrementWorkTime() {
		if(this.state.timerRunning === false) {
			this.setState({workTime: this.state.workTime + 1})	
		}
	}

	decrementWorkTime() {
		if(this.state.timerRunning === false) {
			this.setState({workTime: this.state.workTime - 1})	
		}
	}

	handleStartButton() {
		if (this.state.timerRunning === false) {
			document.querySelector('.pomoButton').innerHTML = 'Exit';
			this.setState({timerRunning: true});
			this.startTimer();		 
		} else {
			document.querySelector('.pomoButton').innerHTML = 'Start'
			this.setState({
				timerRunning: false,
				currentTime: this.state.workTime + ':00',
				cycle: 'work'
			});
			clearInterval(this.state.timerSeconds);
		}
	}

	startTimer(){
		let timerDuration;
		if (this.state.cycle === 'work') {
			timerDuration = this.state.workTime;
			let time = timerDuration * 60
			let runningTimer = setInterval(() => {
				this.setState({timerSeconds: runningTimer})
				time = time - 1;
				let minutes = Math.floor(time / 60)
				let seconds = time - (minutes * 60)
				minutes = minutes < 10 ? '0' + minutes : minutes
				seconds = seconds < 10 ? '0' + seconds : seconds
				this.setState({currentTime: minutes + ':' + seconds})
				if (this.state.timerRunning === false) {
					this.setState({
						currentTime: this.state.workTime + ':00',
						cycle: 'work'
					});
					clearInterval(this.state.timerSeconds)
				}
				if (minutes == 0 && seconds == 0) {
					this.setState({
						cycle: 'break',
						timerRunning: false,
						currentTime: this.state.breakTime
					});
					clearInterval(this.state.timerSeconds)
					document.querySelector('.pomoButton').innerHTML = 'Break'
				}
			}, 1000)

		} else {
			timerDuration = this.state.breakTime;
			let time = timerDuration * 60;
			let runningTimer = setInterval(() => {
				this.setState({timerSeconds: runningTimer})
				time = time - 1;
				let minutes = Math.floor(time / 60)
				let seconds = time - (minutes * 60)
				this.setState({currentTime: minutes + ':' + seconds})

				if (minutes == 0 && seconds == 0) {
					this.setState({
						cycle: 'work',
						timerRunning: false,
						currentTime: this.state.workTime
					});
					clearInterval(this.state.timerSeconds)
					document.querySelector('.pomoButton').innerHTML = 'Start'
				}
			}, 1000)
		}
	}


	render() {
		return(
		<div>
			<img className='pomoIcon grow' src={pomodoroIcon} alt='icon' onClick={this.props.togglePomo} />
			<div className='pomoBox'>
				<div className='pomoTopSection'>
					<img className='moreIcon grow' src={moreIcon} alt='icon' onClick={this.toggleSettings}/>
					<img className='fullScreenIcon grow' src={fullScreenIcon} alt='icon' onClick={this.toggleFullScreen}/>
				</div>
				<div className='pomoMiddleSection'>
					<div className='countDownRing'>
						<h1 className='countDown'>{this.state.currentTime}</h1>
					</div>
				</div>
				<div className='pomoBottomSection'>
					<div className='pomoButtonBox'> 
						<button className='pomoButton' type='button' value='start' onClick={this.handleStartButton}>Start</button>
					</div>
				</div>
				<PomoSettings 
					breakTime={this.state.breakTime} 
					workTime={this.state.workTime} 
					toggleSettings={this.toggleSettings}
					incrementWorkTime={this.incrementWorkTime}
					decrementWorkTime={this.decrementWorkTime}
					incrementBreakTime={this.incrementBreakTime}
					decrementBreakTime={this.decrementBreakTime}
					/>
			</div>
		</div>
		)
	}
}

export default Pomodoro;