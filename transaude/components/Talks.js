import React from 'react';

export default class Talks extends React.Component {
	render() {
		return (
			<div>
			<h1 className="article_color">Talks</h1>
			<div className="videos-section">
				<iframe width="320" height="200" src="https://www.youtube.com/embed/j-h9WBtGHd4" frameborder="0" allowfullscreen>
				</iframe>
				<iframe width="320" height="200" src="https://www.youtube.com/embed/0YeVt2kp_So" frameborder="0" allowfullscreen>
				</iframe>
			</div>
			</div>
		);
	}
}
