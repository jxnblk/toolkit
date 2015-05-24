
import React from 'react';
import { defaults, Header, Rule } from '../..';
import Head from './Head.jsx';
import Grid from './Grid.jsx';
import Features from './Features.jsx';
import FlexSection from './FlexSection.jsx';
import BtnSection from './BtnSection.jsx';
import BoxSection from './BoxSection.jsx';

import { Container } from '../..';

class Root extends React.Component {

  render() {
    return (
      <html>
        <Head {...this.props} />
        <body>
          <Container>
            <Header>
              <h1 style={{ margin: 0 }}>{this.props.title}</h1>
              <p style={defaults.m0}>{this.props.description} – v{this.props.version}</p>
            </Header>
            <Features />
            <Rule />
            <Grid />
            <BtnSection />
            <BoxSection />
          </Container>
        </body>
      </html>
    )
  }

}

export default Root

