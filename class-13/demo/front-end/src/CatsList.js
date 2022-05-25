/**
 * @file CatsList.js
 */
import React from "react";
import { ListGroup } from "react-bootstrap";
import Cat from "./Cat";
import UpdateCatForm from "./UpdateCatForm";

class CatsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: null,
    };
  }

  delete = () => {
    this.props.onDelete(this.props.info);
  };

  /**
   * Handle the modal when a cat needs to be updated
   * @param {*} cat
   */
  handleCatSelect = (cat) => {
    console.log(`CatsList.handleCatSelect()`);
    this.setState({ selectedCat: cat });
  };

  handleClose = () => {
    this.setState({ selectedCat: null });
  };

  render() {
    return (
      <>
        <ListGroup>
          {this.props.cats.length &&
            this.props.cats.map((cat, idx) => {
              return (
                <ListGroup.Item key={idx}>
                  <Cat
                    info={cat}
                    onDelete={this.props.onDelete}
                    onUpdate={this.handleCatSelect}
                  />
                </ListGroup.Item>
              );
            })}
        </ListGroup>
        {this.state.selectedCat && (
          <UpdateCatForm
            cat={this.state.selectedCat}
            show={this.state.selectedCat !== null}
            onUpdate={this.props.onUpdate}
            onClose={this.handleClose}
          />
        )}
      </>
    );
  }
}

export default CatsList;
