
import React from 'react';

import { Section, Flex, FlexCol } from '../..';

class FlexSection extends React.Component {

  render() {
    return (
      <Section id="flex" className="outline">
        <h2>Flex</h2>
        <Flex>
          <FlexCol w={4}> FlexCol 4 </FlexCol>
          <FlexCol w={4}> FlexCol 4 </FlexCol>
          <FlexCol w={4}> FlexCol 4 </FlexCol>
        </Flex>
        <Flex>
          <FlexCol w={8}> FlexCol 8 </FlexCol>
          <FlexCol w={4}> FlexCol 4 </FlexCol>
        </Flex>
        <Flex>
          <FlexCol w={6}> FlexCol 6 </FlexCol>
          <FlexCol w={6}> FlexCol 6 </FlexCol>
        </Flex>
        <Flex>
          <FlexCol w={3}> FlexCol 3 </FlexCol>
          <FlexCol w={9}> FlexCol 9 </FlexCol>
        </Flex>
      </Section>
    )
  }

}

export default FlexSection

