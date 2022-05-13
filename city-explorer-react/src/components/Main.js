/**
 * @file Main.js
 * @author Code Fellows
 */
import React, { Component } from 'react';
import restaurants from '../fake-data/restaurants.json';
import location from '../fake-data/location.json';
import Map from './Map';
import map from '../images/map.png';
import Restaurants from './Restaurants';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayResult: false,
			locationObj: location,
			restaurants: restaurants,
		};
	}
	handleLocationSearch = (evt) => {
		evt.preventDefault();
		this.setState({ displayResult: true });
		console.log('handleLocationSearch()');
	};
	render() {
		console.log('youre in main.js');
		return (
			<div id="Main">
				<form onSubmit={this.handleLocationSearch} id="search-form">
					<label htmlFor="input-search">Search for a location</label>
					<input
						type="text"
						name="search"
						id="input-search"
						placeholder="Enter Location here"
					/>
					<button type="submit">Explore!</button>
				</form>
				{this.state.displayResult && (
					<div>
						<Map location={this.state.locationObj} map={map} />
                        <Restaurants restaurants={this.state.restaurants}
                        location={this.state.locationObj}/>
					</div>
				)}
			</div>
		);
	}
}

export default Main;
