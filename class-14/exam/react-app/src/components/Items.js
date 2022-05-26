import { Component } from 'react';
import Item from './Item';

class Items extends Component {
	render() {
		return (
			<section>
				<h2>Items...</h2>
				{this.props.itemsList.map((item, idx) => (
					<Item
						key={idx}
						itemData={item}
						handleDelete={this.props.handleDeleteItem}
					/>
				))}
			</section>
		);
	}
}

export default Items;
