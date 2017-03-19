import React from 'react';

export default class Videos extends React.Component {
	render() {
		return (
			<div>
			<h2 id="videos" className="menu-subtitle">Vídeos</h2>
			<div className="videos-section">
				<iframe width="300" height="150" src="http://www.youtube.com/embed/9zACyYDp_fg" frameborder="0" allowfullscreen>
				</iframe>
				<iframe width="300" height="150" src="https://www.youtube.com/embed/WupOPOrH8hw">
				</iframe>
				<iframe width="300" height="150" src="https://www.youtube.com/embed/0Sit-1ZEx40">
				</iframe>
				<iframe width="300" height="150" src="https://www.youtube.com/embed/NA4BweFbpys">
				</iframe>
			</div>
			</div>
		);
	}
}
