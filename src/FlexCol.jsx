
import React from 'react';
import defaults from './defaults.jsx';

class FlexCol extends React.Component {

  render() {

    var style = {
      flex: '1 0 auto',
      boxSizing: 'border-box',
      width: (this.props.w/12*100) + '%',
      minWidth: this.props.min * this.props.w,
      paddingLeft: defaults.s2,
      paddingRight: defaults.s2,
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

FlexCol.propTypes = {
  w: React.PropTypes.number,
  min: React.PropTypes.number
}

FlexCol.defaultProps = {
  w: 12,
  min: 40
}

export default FlexCol;

