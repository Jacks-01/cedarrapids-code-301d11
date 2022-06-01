/**
 * @file CatsList.js
 * @author Code Fellows
 * @description Handles the display of the list of cats as well as the update form.
 */
import React from "react";
import { ListGroup } from "react-bootstrap";
import Cat from "./Cat";
import UpdateCatForm from "./UpdateCatForm";

class CatsList extends React.Component {

  /**
   * Initializes the start attributes.
   * 
   * selectedCat: object - the cat object to update
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: null,
    };
  }

  /**
   * Handle deletion of a cat
   */
  delete = () => {
    this.props.onDelete(this.props.info);
  };

  /**
   * Handle the modal when a cat needs to be updated
   * 
   * @param {*} cat
   */
  handleCatSelect = (cat) => {
    console.log(`CatsList.handleCatSelect()`);
    this.setState({ selectedCat: cat });
  };

  /**
   * Handle the close operation of the modal update form
   */
  handleClose = () => {
    this.setState({ selectedCat: null });
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
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
