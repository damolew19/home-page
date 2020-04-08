import React from 'react';
import './Quotes.css';
import wikiIcon from './wikiIcon.png'

const quoteList = {
	'Salvador Dali': '"Those who do not want to imitate anything, produce nothing."',
	'Hal Boyle': '"What makes a river so restful to people is that it doesn\'t have any doubt - it is sure sure to get where it is going, and it doesn\'t want to go anywhere else."'
}

const Quotes = (props) => {

		const randomNumber = Math.floor(Math.random() * Object.keys(quoteList).length);
		let wikiLink = `https://en.wikipedia.org/wiki/${Object.keys(quoteList)[randomNumber]}`

	return (
		<div className='widgetContainer' onMouseLeave={props.onToggleHide} onMouseEnter={props.onToggleShow}>
			<div className='quoteBox'>
				<div className='quote'>
					{Object.values(quoteList)[randomNumber]}
				</div>
				<div className='author'>
					{'- ' + Object.keys(quoteList)[randomNumber] + ' -'}
					<a href={wikiLink}>
						<img src={wikiIcon} alt='icon' id='wikiIcon' className='grow'/>
					</a>
				</div>
			</div>
		</div>
		)
}

export default Quotes;
