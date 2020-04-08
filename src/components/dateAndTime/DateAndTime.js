import React from 'react';
import './DateAndTime.css';

let today = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wedneday', 'Thursday', 'Friday', 'Saturday'];

export class DateAndTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: String(today.getHours()).padStart(2, '0'),
			minutes: String(today.getMinutes()).padStart(2, '0'),
			seconds: String(today.getSeconds()).padStart(2, '0'),
			hours12: String(this.checkOver12(today.getHours())).padStart(2, '0'),
			day: String(today.getDate()).padStart(2, '0'),
			month: String(today.getMonth() + 1).padStart(2, '0'),
			year: String(today.getFullYear()),
			dayName: days[today.getDay()],
			monthName: months[today.getMonth()],
		}

	}

	componentDidMount() {
	    this.intervalID = setInterval(() => this.clock(), 1000);
	    this.intervalID = setInterval(() => this.dateAndTime(), 1000);
	}

 	componentWillUnmount() {
    	clearInterval(this.intervalID);
 	 }

 	checkOver12(num) {
 		if (num > 12) {
 			return num = num - 12;
 		} else {
 			return num;
 		}
 	}

	clock() {
		let newTime = new Date();
			this.setState({
			hours: String(newTime.getHours()).padStart(2, '0'),
			minutes: String(newTime.getMinutes()).padStart(2, '0'),
			seconds: String(newTime.getSeconds()).padStart(2, '0'),
			hours12: String(this.checkOver12(newTime.getHours())).padStart(2, '0'),	
			})
	  }



		date() {	
			let newTime = new Date();
			this.setState({
				day: String(newTime.getDate()).padStart(2, '0'),
				month: String(newTime.getMonth() + 1).padStart(2, '0'),
				year: String(newTime.getFullYear()),
				dayName: days[newTime.getDay()],
				monthName: months[newTime.getMonth()],
			})
		}

		dateAndTime() {
			this.setState({
				dateAndTime: String(new Date())
			})
		}




	render() {
		return(
			<div>
				<div className='time'>
					<div className='date'>
						<div className='dayName'>
							{this.state.dayName + ','}
						</div>
						<div className='monthName'>
							{this.state.monthName}
						</div>
						<div className='day'>
							{this.state.day} 
						</div>
					</div>
					<div className='hours'>
						{this.state.hours}
					</div>
					<div className='hours12'>
						{this.state.hours12}
					</div>
					<div className='minutes'>
						:{this.state.minutes}
					</div>
					<div className='seconds'>
						:{this.state.seconds}
					</div>
				</div>
			</div>
		)
	}
}