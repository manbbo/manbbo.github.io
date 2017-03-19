import React from 'react';
import Modal from 'react-modal';

export default class HeaderDoc extends React.Component {

	render() {
		return (
			<div className="">
				<div className="header-login-doctor">
					<img src="../images/logo-transaude-branco.png"/>
					<span className="header-login-doctor__span">
						Olá Dr. João Paulo! Você está conectado
						<a href="/" className="header-login-doctor__logout"> (Sair)</a>
					</span>
				</div>
			</div>
		);
	}
}
