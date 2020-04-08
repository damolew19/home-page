import React from 'react';
import './PomoSettings.css';
import xIcon from './xIcon.png';

class PomoSettings extends React.Component {
	
	handleBreakDecrement = () => {
		this.props.decrementBreakTime();
	}

	handleBreakIncrement = () => {
		this.props.incrementBreakTime();
	}
	
	render() {
		return (
			<div className='pomoSettingsBox'>
				<div className='topBox'>
					<img className='exitMoreIcon grow' src={xIcon} alt='icon' onClick={this.props.toggleSettings}/>
				</div>
				<div className='breakBox'>
					<h3>Break Time</h3>
					<div className='adjustBreak'>
						<button className='buttons' type='button' onClick={this.props.decrementBreakTime}>Less Time</button>
						<p>{this.props.breakTime}</p>
						<button className='buttons' type='button' onClick={this.props.incrementBreakTime}>More Time</button>
					</div>
				</div>
				<div className='workBox'>
					<h3>Work Time</h3>
					<div className='adjustWork'>
						<button className='buttons' type='button' onClick={this.props.decrementWorkTime}>Less Time</button>
						<p>{this.props.workTime}</p>
						<button className='buttons' type='button' onClick={this.props.incrementWorkTime}>More Time</button>
					</div>
				</div>
			</div>
		);	
	}
	
}

export default PomoSettings;


// <div className='scroll'>
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 		<li>4</li>
// 		<li>5</li>
// 		<li>6</li>
// 		<li>7</li>
// 	</ul>
// 	<p className='borderBottom'/>
// </div>