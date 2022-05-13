/**
 * @file Header.js
 * @author Code Fellows
 */
import React, { Component } from 'react';

class Header extends Component {
	state = {};
	render() {
		return (
			<div id="header">
				<h1> Plan your visit to the USA</h1>
				<p>
					Enter a location inthe USA below to learn about the weather,
					restraunts, movies, and more!
				</p>
			</div>
		);
	}
}

export default Header;
