
import React from 'react';
import defaults from './defaults.jsx';

class Section extends React.Component {

  render() {
    var style = {
      paddingTop: defaults.s4,
      paddingBottom: defaults.s4,
    }

    return (
      <section {...this.props} style={style}>
        {this.props.children}
      </section>
    )
  }
}

export default Section;

