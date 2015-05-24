
import React from 'react';

import { Section, Row, Col, Space } from '../..';

class Grid extends React.Component {

  render() {
    return (
      <Section id="grid">
        <h2>Grid</h2>
        <p>Row, Col, and Space</p>
        <div className="outline">
          <Row>
            <Col w={6}>
              <Space p={2}>
                Col 6
              </Space>
            </Col>
            <Col w={6}>
              <Space p={2}>
                Col 6
              </Space>
            </Col>
          </Row>
          <Space m={4} />
          <Row>
            <Col w={4}>Col 4</Col>
            <Col w={4}>Col 4</Col>
            <Col w={4}>Col 4</Col>
            <Col w={3}>Col 3</Col>
            <Col w={3}>Col 3</Col>
            <Col w={3}>Col 3</Col>
            <Col w={3}>Col 3</Col>
          </Row>
        </div>
      </Section>
    )
  }

}

export default Grid

