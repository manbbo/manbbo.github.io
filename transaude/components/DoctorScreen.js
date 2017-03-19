import React from 'react';
import HeaderDoc from './HeaderDoc';
import Articles from './Articles';
import Footer from './Footer';
import Talks from './Talks';
import Law from './Law';

export default class DoctorScreen extends React.Component {
	render() {
		return (
			<div>
				<HeaderDoc />
				<Articles />
				<br/>
				<br/>
				<Talks />
				<br/>
				<br/>
				<Law />
				<br/>
				<br/>
				<br/>
				<br/>	
				<Footer />
			</div>
		);
	}
}


