
import React from 'react';
import defaults from './defaults.jsx';

class Col extends React.Component {

  render() {
    var style = {
      boxSizing: 'border-box',
      float: 'left',
      paddingLeft: defaults.s2,
      paddingRight: defaults.s2,
      width: (this.props.w/12*100) + '%',
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

Col.propTypes = {
  w: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
};

Col.defaultProps = {
  w: 12
};

export default Col;

