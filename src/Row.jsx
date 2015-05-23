
import React from 'react';
import defaults from './defaults.jsx';

class Row extends React.Component {

  render() {
    var styles = {
      row: {
        marginLeft: -defaults.s2,
        marginRight: -defaults.s2,
      },
      cf: {
        display: 'table',
        clear: 'both'
      }
    }

    return (
      <div style={styles.row}>
        {this.props.children}
        <div style={styles.cf} />
      </div>
    )
  }
}

export default Row;

