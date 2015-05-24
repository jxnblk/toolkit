
import React from 'react';

import { Section, Btn } from '../..';

class BtnSection extends React.Component {

  render() {
    return (
      <Section id="Btn">
        <h2>Btn</h2>
        <Btn>Primary</Btn>
        <Btn secondary>Secondary</Btn>
      </Section>
    )
  }

}

export default BtnSection

