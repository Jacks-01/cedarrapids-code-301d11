/**
 * @file CreateCat.js
 */
import React from "react";
import { Form, Button } from "react-bootstrap";

class CreateCat extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`CatCreate.handleSubmit()`);
    let catName = evt.target.formName.value;
    let color = evt.target.formColor.value;
    let location = evt.target.formLocation.value;
    let checked = evt.target.formClawsCheckbox.checked;
    console.log(
      `name: ${catName}, color ${color}, location: ${location}, hasClaws: ${checked}`
    );
    let cat = {
      name: catName,
      color: color,
      location: location,
      hasClaws: checked,
    };
    this.props.onCreate(cat);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter cat name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="name" placeholder="Enter cat color" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="name" placeholder="Enter cat location" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formClawsCheckbox">
          <Form.Check type="checkbox" label="Has Claws" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CreateCat;
