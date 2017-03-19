import React from 'react';

export default class Resposta extends React.Component {
	state = {
		selectedOption:'',
	}
	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });
		this.props.handleScore(e.target.value, this.props.resp.number);
	}

	render() {
		return (
			<div>
				{this.props.resp.answer.map((ans) => {
					return(	
						<label>
						<input 
							type="radio"
							value= {ans}
							onChange={ this.handleOptionChange }
							checked={this.state.selectedOption === ans}
							/>
						{ans}
					</label>)
				
					})}
			</div>
		);
	}
}
