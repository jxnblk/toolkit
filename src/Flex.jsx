
import React from 'react';
import defaults from './defaults.jsx';

class Flex extends React.Component {

  render() {

    var style = {
      display: 'flex',
      flexWrap: 'wrap',
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}


export default Flex;

