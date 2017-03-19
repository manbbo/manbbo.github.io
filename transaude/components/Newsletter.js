import React from 'react';

export default class Newsletter extends React.Component {
	render() {
		return (
			<div id="newsletter" className="newsletter">
				<h3>Assine Nossa Newsletter</h3>
				<input className="newsletter__input" placeholder="Email"/>
				<button className="newsletter__button">ENVIAR</button>
			</div>
		);
	}
}
