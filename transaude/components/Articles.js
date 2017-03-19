import React from 'react';

export default class Articles extends React.Component {
	render() {
		return (
			<div>
				<h1 className="article_color">Artigos</h1>
				<div className="article-section">
					<a href="http://www6.ensp.fiocruz.br/repositorio/sites/default/files/arquivos/Schramm_.pdf"
					target="__blank">
						A Moralidade da Transexualidade: Aspectos Bioéticos e Jurídicos (2011)
					</a>
					<button className="article-section__button">BAIXAR</button>
				</div>
			</div>
		);
	}
}
