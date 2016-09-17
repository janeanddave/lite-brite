import React from 'react';

export default class LiteBriteHole extends React.Component {
  static propTypes ={
    pegColor: React.PropTypes.string,
    centerX: React.PropTypes.number.isRequired,
    centerY: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number.isRequired,
  }

  render() {
    let {
      pegColor,
      centerX,
      centerY,
      radius
    } = this.props;

    let color = pegColor || 'empty';

    return (
      <circle cx={centerX} cy={centerY} r={radius} className={color} />
    );
  }
}
