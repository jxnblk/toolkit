
import React from 'react';
import defaults from './defaults.jsx';

class Space extends React.Component {

  render() {
    var scale = [
      0,
      defaults.s1,
      defaults.s2,
      defaults.s3,
      defaults.s4,
    ];
    var m = this.props.m,
        mt = this.props.mt,
        mr = this.props.mr,
        mb = this.props.mb,
        ml = this.props.ml,
        mx = this.props.mx,
        my = this.props.my,
        p = this.props.p,
        pt = this.props.pt,
        pr = this.props.pr,
        pb = this.props.pb,
        pl = this.props.pl,
        px = this.props.px,
        py = this.props.py;
    var style = {
      margin: m ? scale[m] : null,
      marginTop: mt ? scale[mt] : null,
      marginRight: mr ? scale[mr] : null,
      marginBottom: mb ? scale[mb] : null,
      marginLeft: ml ? scale[ml] : null,
      padding: p ? scale[p] : null,
      paddingTop: pt ? scale[pt] : null,
      paddingRight: pr ? scale[pr] : null,
      paddingBottom: pb ? scale[pb] : null,
      paddingLeft: pl ? scale[pl] : null,
    }
    if (mx) {
      style.marginLeft = scale[mx];
      style.marginRight = scale[mx];
    }
    if (my) {
      style.marginTop = scale[my];
      style.marginBottom = scale[my];
    }
    if (px) {
      style.paddingLeft = scale[px];
      style.paddingRight = scale[px];
    }
    if (py) {
      style.paddingTop = scale[py];
      style.paddingBottom = scale[py];
    }

    return (
      <div {...this.props} style={style}>
        {this.props.children}
      </div>
    )
  }
}

Space.propTypes = {
  m: React.PropTypes.number,
  mt: React.PropTypes.number,
  mr: React.PropTypes.number,
  mb: React.PropTypes.number,
  ml: React.PropTypes.number,
  mx: React.PropTypes.number,
  my: React.PropTypes.number,
  p: React.PropTypes.number,
  pt: React.PropTypes.number,
  pr: React.PropTypes.number,
  pb: React.PropTypes.number,
  pl: React.PropTypes.number,
  px: React.PropTypes.number,
  py: React.PropTypes.number
}

export default Space;

