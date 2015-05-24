
import React from 'react';
import defaults from './defaults.jsx';

class Container extends React.Component {

  render() {
    var style = {
      paddingLeft: defaults.s2,
      paddingRight: defaults.s2,
      maxWidth: this.props.fluid ? null : defaults.maxWidth,
      margin: '0 auto',
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  fluid: React.PropTypes.bool
};

export default Container;

