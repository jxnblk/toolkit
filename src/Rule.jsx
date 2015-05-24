
import React from 'react';
import defaults from './defaults.jsx';

class Rule extends React.Component {

  render() {
    var style = {
      marginTop: defaults.s2,
      marginBottom: defaults.s2,
      border: 0,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: defaults.gray,
    }

    return (
      <hr {...this.props} style={style} />
    )
  }

}

export default Rule;

