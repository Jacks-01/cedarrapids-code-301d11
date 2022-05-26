import { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export class Item extends Component {
	delete = (e) => {
		e.preventDefault();
		console.log('this is the event log', e);
		this.props.handleDelete(this.props.itemData);
	};
	render() {
		const itemData = this.props.itemData;

		return (
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>{this.props.itemData.name}</Accordion.Header>
					<Accordion.Body>
						{this.props.itemData.description}
						<Button
							data-testid={`delete-button-${itemData.name}`}
							onClick={this.delete}
						>
							Delete Item
						</Button>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		);
	}
}

export default Item;
