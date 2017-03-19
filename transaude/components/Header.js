import React from 'react';
import Modal from 'react-modal';

export default class Header extends React.Component {

	state = {
		isOpen: false,
		selectedOption:'',
	};

	openModal = () => {
  	this.setState({
    	isOpen: true
  	});
	};
 
	closeModal = () => {
	  this.setState({
	    isOpen: false
	  });
	};

	afterOpenModal = () => {
	  this.refs.subtitle.style.color = 'lightgray';
	};

	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value })
	}
	
	render() {
		return (
			<div>
				<div className="header-login">
					<img src="../images/logo-transaude.png"/>
					<a href="#quemsomos" className="header-menu">Quem Somos</a>
					<a href="#quiz" className="header-menu">Quiz</a>
					<a href="#videos" className="header-menu">Vídeos</a>
					<button className="header-login__button" onClick={ this.openModal }>
						Cadastre-se
					</button>
				</div>
				<div className="header-info-box">
					<h2>TRANSAÚDE CONHECIMENTO</h2>
					<h3>Por um atendimento humanitário</h3>
				</div>
				<Modal 
					className="modal" 
					isOpen={ this.state.isOpen }
					onAfterOpen={ this.afterOpenModal }
					onRequestClose={ this.closeModal }
					contentLabel="Cadastro"
				>
				<form className="form-subscribe">
					<h2 className="form-subscribe__color">Cadastro</h2>
						<label>
							<input 
								className="form-subscribe__color"
								type="radio"
								value="option1" 
								onChange= { this.handleOptionChange }
								checked={this.state.selectedOption === "option1"}
								/>
							Sou Trans
						</label>
						<label>
							<input 
								className="form-subscribe__color"
								type="radio"
								value="option2"
								onChange= { this.handleOptionChange }
								checked={this.state.selectedOption === "option2"}
							/>
							Sou Médico
						</label>
							<input 
								className="form-subscribe__input" placeholder="Nome"/>
							<input className="form-subscribe__input" placeholder="E-mail"/>
							<input className="form-subscribe__input" placeholder="Especialidade"/>
							<input className="form-subscribe__input" placeholder="Senha"/>
							<a href="/id=123" className="form-subscribe__button" >ENVIAR</a>
					</form>
				</Modal>
			</div>
		);
	}
}
