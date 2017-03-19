import React from 'react';
import Header from './Header';
import About from './About';
import Quiz from './Quiz';
import Videos from './Videos';
import Newsletter from './Newsletter';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
      return (
			<div>
				<Header />
				<About />
        <Quiz />
				<Videos />
				<Newsletter />
        <Footer />
			</div>
      );
  }
}
