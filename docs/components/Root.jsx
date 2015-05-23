
import React from 'react';
import Head from './Head.jsx';
import Grid from './Grid.jsx';

import { Container } from '../..';

class Root extends React.Component {

  render() {
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Container>
            <h1>{this.props.title}</h1>
            <p>{this.props.description} – v{this.props.version}</p>
            <Grid />
          </Container>
        </body>
      </html>
    )
  }

}

export default Root

