/**
 * @file Main.js
 * @author Code Fellows
 * @description The main section of the page
 */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BeastImage from "./BeastImage";

/**
 * Renders the main section of the page
 */
class Main extends React.Component {

  /**
   * Draw the content.
   * 
   * @returns {Component}
   */
  render() {
    const beastImages = this.props.imageUrls;
    return (
      <main>
        <h2>{this.props.message}</h2>
        <Container>
          <Row>
            <Col>
              <BeastImage imageUrl={beastImages[0].image_url} />
              <BeastImage imageUrl={beastImages[1].image_url} />
              <BeastImage imageUrl={beastImages[2].image_url} />
            </Col>
            <Col>
              <BeastImage imageUrl={beastImages[3].image_url} />
              <BeastImage imageUrl={beastImages[4].image_url} />
              <BeastImage imageUrl={beastImages[5].image_url} />
            </Col>
            <Col>
              <BeastImage imageUrl={beastImages[6].image_url} />
              <BeastImage imageUrl={beastImages[7].image_url} />
              <BeastImage imageUrl={beastImages[8].image_url} />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
