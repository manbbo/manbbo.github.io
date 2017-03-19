import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import DoctorScreen from './components/DoctorScreen';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
	<Router>
		<div>
	    <Route exact path="/" component={ App } />
	    <Route exact path="/id=123" component= { DoctorScreen } />
    </div>
  </Router>,
	document.getElementById('main')
);
