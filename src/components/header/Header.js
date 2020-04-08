import React from 'react';
import './Header.css';
import {DateAndTime} from '../dateAndTime/DateAndTime';


export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { time: 'Good Morning'}
	}

	findHour() {
		const today = new Date();
		return today.getHours()
	}

	whichGreeting() {
		let currentHour = this.findHour();
			if (0 <= currentHour &&  currentHour < 12 ) {
				return 'Good Morning';
			} else if (12 <= currentHour && currentHour < 17 ) {
				return 'Good Afternoon';
			} else {
				return 'Good Evening';
			}
		}

	render() {
		return (
			<div className='header'>
				<DateAndTime />
				<h1 className='title'>{ this.whichGreeting() }, Damien</h1>
			</div>
		);
	}
}
