
import React from 'react';
import defaults from './defaults.jsx';

class Box extends React.Component {

  render() {
    var style = {
      padding: defaults.s2,
      marginBottom: defaults.s2,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: defaults.gray,
      borderRadius: defaults.borderRadius
    }

    return (
      <div {...this.props} style={style}>
        {this.props.children}
      </div>
    )
  }
}

class Header extends React.Component {

  render() {
    var style = {
      fontWeight: 'bold',
      padding: defaults.s2,
      marginTop: -defaults.s2,
      marginRight: -defaults.s2,
      marginLeft: -defaults.s2,
      marginBottom: defaults.s2,
      //color: '#fff',
      backgroundColor: defaults.silver,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: defaults.gray,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

class Footer extends React.Component {

  render() {
    var style = {
      fontSize: defaults.small,
      padding: defaults.s2,
      marginTop: defaults.s2,
      marginRight: -defaults.s2,
      marginLeft: -defaults.s2,
      marginBottom: -defaults.s2,
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: defaults.gray,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

Box.Header = Header;
Box.Footer = Footer;

export default Box;

