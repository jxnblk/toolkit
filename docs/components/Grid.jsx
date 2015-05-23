
import React from 'react';

import { Container, Row, Col } from '../..';

class Grid extends React.Component {

  render() {
    return (
      <section id="grid" className="outline">
        <Row>
          <Col w={6}>Col 6</Col>
          <Col w={6}>Col 6</Col>
          <Col w={4}>Col 4</Col>
          <Col w={4}>Col 4</Col>
          <Col w={4}>Col 4</Col>
          <Col w={3}>Col 3</Col>
          <Col w={3}>Col 3</Col>
          <Col w={3}>Col 3</Col>
          <Col w={3}>Col 3</Col>
        </Row>
      </section>
    )
  }

}

export default Grid

