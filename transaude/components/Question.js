import React from 'react';
import Resposta from './Resposta';
import { questions } from '../constant-quiz';

let score=0;
export default class Question extends React.Component {

	constructor() {
		super();
    this.score = 0;
  }

  state = { openFeedback: false }
	handleScore = (ans, number) => {

		if(number === 1 && ans === 'B') {
			this.score=this.score+1;

		}
		if(number === 2 && ans === 'B') {
			this.score=this.score+1;
		}
		if(number === 3 && ans === 'C') {
			this.score=this.score+1;
		}
		if(number === 4 && ans === 'C') {
			this.score=this.score+1;
		}
		if(number === 5 && ans === 'B') {
			this.score=this.score+1;
		}
		if(number === 6 && ans === 'C') {
			this.score=this.score+1;
		}
		console.log("this.state", score);
		return score;
	}

	showScore = () => {
		
		let finalScore = this.score;
		this.setState({
	    openFeedback: true,
	  });

	}
	render() {
		console.log(score);
		return (
			<div>
				<div>
					{questions.map((q) =>
						<div>
							<h3>{q.question}</h3>
							<Resposta resp={ q } handleScore={ this.handleScore } />
						</div>
						)}
				</div>
				<div className="quiz">
					 		<button className="quiz__button" onClick={ this.showScore }>Calcular Pontuação</button>
				</div>
			</div>
		);
	}
}
