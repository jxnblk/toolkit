
import React from 'react';

import { Section, Row, Col } from '../..';

class Grid extends React.Component {

  render() {
    return (
      <Section id="grid" className="outline">
        <h2>Grid</h2>
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
      </Section>
    )
  }

}

export default Grid

