import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';

const API_SERVER = process.env.REACT_APP_API;
//* added react_app_api in .env file
//* added console logs

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	addItem = async (item) => {
		await axios.post(`${API_SERVER}/items`, item); //* Fixed a typo: post --> axios.post
		this.getItems();
	};

	getItems = async () => {
		console.log(`this is our api server ${API_SERVER}`);
		const response = await axios.get(`${API_SERVER}/items`);
		const items = response.data;
		this.setState({ items: items }); //* set state was missing key value pair
		console.log(`this is our items after we grab them ${JSON.stringify(this.state.items)}`);
	};

	deleteItem = async (item) => {
		console.log(`this is the item we are deleting ${JSON.stringify(item)}`);
		await axios.delete(`${API_SERVER}/items/${item._id}`)
			.then((res) => {
				console.log(`server response from DELETE ${res}`);
        this.getItems();
        // const filteredItems = this.state.items.filter((item) =>{
        //   return item._id !== item;
        // })
        // this.setState({items: filteredItems})
			})
			.catch((err) => {
				console.error(err);
			});
	};

	async componentDidMount() {
		await this.getItems();
	}

	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">301 Final!</Navbar.Brand>
				</Navbar>
				<Container fluid>
					<Row>
						<Col>
							<h1>Our Items</h1>
						</Col>
					</Row>
					<Row>
						<Col md="auto">
							<Form handleAddItem={this.addItem}/>
						</Col>
						<Col>
							<Items itemsList={this.state.items} handleDeleteItem={this.deleteItem} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
