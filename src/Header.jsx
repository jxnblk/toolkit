
import React from 'react';
import defaults from './defaults.jsx';

class Header extends React.Component {

  render() {
    var style = {
      paddingTop: defaults.s2,
      paddingBottom: defaults.s2,
      marginBottom: defaults.s2,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: defaults.gray,
    }

    return (
      <header {...this.props} style={style}>
        {this.props.children}
      </header>
    )
  }
}

export default Header;

