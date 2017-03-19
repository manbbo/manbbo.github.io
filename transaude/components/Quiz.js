import React from 'react';
import Modal from 'react-modal';
/*import { questions } from '../constant-quiz';*/
import { Q1 } from '../constant-quiz';
import Question from './Question';

export default class Quiz extends React.Component {

	state = {
  	isOpen: false,
  	openFeedback: false,
  	selectedOption:'',
	};
 
	openModal = () => {
  	this.setState({
    	isOpen: true,
  	});
	};
 
	closeModal = () => {
	  this.setState({
	    isOpen: false
	  });
	};

	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });	
	}

	render() {
		return (
		
			<div>
			<div id="quiz" className="knowledge-quiz-info">
				<p className="knowledge-quiz-info__title">Teste seu conhecimento sobre o universo TRANS</p>
				<p className="knowledge-quiz-info__subtitle">Aqui você irá responder o quiz e aprender sobre o tema</p>
				<button className="knowledge-quiz-info__button" onClick={ this.openModal } >Quero aprender  ></button>
			</div>
			<Modal
				isOpen={ this.state.isOpen }
				onRequestClose={ this.closeModal }
				contentLabel="Quiz"
			>
			 <Question />
			 </Modal>
			 <Modal openFeedBack={ this.state.openFeedback } className="quiz-result">
			 </Modal>
			</div>
		);
	}
}
