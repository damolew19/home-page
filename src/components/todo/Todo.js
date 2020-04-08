import React from 'react';
import './Todo.css';

export class Todo extends React.Component {

	handle

	render() {
		return(
			<div>
				<div className='todoBox'>
					<span className='notWorking'>
						TickTick API coming soon?
					</span>
				</div>
				<div className='todo grow' href='#' onClick={this.props.toggleTodo}>Todo</div>
			</div>
			)
	}
}
