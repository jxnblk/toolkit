
import React from 'react';
import defaults from './defaults.jsx';

class Section extends React.Component {

  render() {
    var style = {
      paddingTop: defaults.s3,
      paddingBottom: defaults.s3,
    }

    return (
      <section {...this.props} style={style}>
        {this.props.children}
      </section>
    )
  }
}

export default Section;

