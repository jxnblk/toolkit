
import React from 'react';
import defaults from './defaults.jsx';

class Btn extends React.Component {

  render() {
    var secondary = this.props.secondary;
    var style = {
      fontFamily: 'inherit',
      fontSize: defaults.small,
      fontWeight: 'bold',
      lineHeight: '32px',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '4px 16px',
      margin: 0,
      height: 'auto',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: secondary ? defaults.gray : 'transparent',
      color: secondary ? 'inherit' : '#fff',
      backgroundColor: secondary ? defaults.silver : defaults.blue,
      borderRadius: defaults.borderRadius
    }

    return (
      <button {...this.props} style={style}>
        {this.props.children}
      </button>
    )
  }

}

Btn.propTypes = {
  secondary: React.PropTypes.bool
}

export default Btn;

