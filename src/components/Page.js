import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import FaceFinder from './FaceFinder';

export default class Page extends React.Component {

	render() {

		return(
			<div>
				<FaceFinder />
				Hello world!
			</div>			
		);

	}

}