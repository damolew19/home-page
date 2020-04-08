import React from 'react';
import './Settings.css';
import SettingsRightSide from './settingsRightSide/SettingsRightSide'
import SettingsLeftSide from './settingsLeftSide/SettingsLeftSide'
import settingsIcon from './Settings.ico'

class Settings extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}



	render() {
		return (
		<div>
			<div className='settingsBox'>
				<SettingsLeftSide />
				<SettingsRightSide />
			</div>
			<img className='settingsIcon grow' src={settingsIcon} alt='icon'  onClick={this.props.toggleSettings} />
		</div>
		)
	}
}

export default Settings;