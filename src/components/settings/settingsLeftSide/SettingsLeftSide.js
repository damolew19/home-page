import React from 'react';
import './SettingsLeftSide.css';

class SettingsLeftSide extends React.Component {
	constructor() {
		super()
		this.state = {
			toggleGeneral: true,
			toggleBackgrounds: false,
			toggleQuotes: false,
		}

		this.handleGeneral = this.handleGeneral.bind(this)
		this.handleBackgrounds = this.handleBackgrounds.bind(this)
		this.handleQuotes = this.handleQuotes.bind(this)
	}

	handleGeneral() {
		if (this.state.toggleGeneral === false) {
			this.setState({
			toggleGeneral: true,
			toggleBackgrounds: false,
			toggleQuotes: false,
		})
		document.querySelector('.general').style.display = 'block';
		document.querySelector('.backgrounds').style.display = 'none';
		document.querySelector('.quotes').style.display = 'none';
		}
	}

	handleBackgrounds() {
		if (this.state.toggleBackgrounds === false) {
			this.setState({
			toggleGeneral: false,
			toggleBackgrounds: true,
			toggleQuotes: false,
		})
		document.querySelector('.general').style.display = 'none';
		document.querySelector('.backgrounds').style.display = 'block';
		document.querySelector('.quotes').style.display = 'none';
		}
	}

	handleQuotes() {
		if (this.state.toggleQuotes === false) {
			this.setState({
			toggleGeneral: false,
			toggleBackgrounds: false,
			toggleQuotes: true,
		})
		document.querySelector('.general').style.display = 'none';
		document.querySelector('.backgrounds').style.display = 'none';
		document.querySelector('.quotes').style.display = 'block';
		}
	}

	render() {
		return(
			<div className='leftSide'>
				<div className='optionsBox'>
					<span className='options' onClick={this.handleGeneral}>General</span>
					<span className='options' onClick={this.handleBackgrounds}>Backgrounds</span>
					<span className='options' onClick={this.handleQuotes}>Quotes</span>
				</div>
			</div>
		)
	}

}

export default SettingsLeftSide;