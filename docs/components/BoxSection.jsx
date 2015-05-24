
import React from 'react';

import { Section, Box } from '../..';

class BoxSection extends React.Component {

  render() {
    return (
      <Section id="Box">
        <h2>Box</h2>
        <Box>Box</Box>
        <Box>
          <Box.Header>
            Box.Header
          </Box.Header>
          Box body
        </Box>
        <Box>
          <Box.Header>
            Box.Header
          </Box.Header>
          Box body
          <Box.Footer>
            Box.Footer
          </Box.Footer>
        </Box>
      </Section>
    )
  }

}

export default BoxSection

