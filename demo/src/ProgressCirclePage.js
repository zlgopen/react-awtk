import React, { Component } from 'react';

import { ProgressCircle, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class ProgressCirclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    if (value < 0) {
      value = 360;
    }
    this.setState({ value: value });
  }

  render() {
    console.log('ProgressCirclePage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <ProgressCircle
          x="c"
          y="m"
          w="100"
          h="100"
          max="360"
          showText="true"
          startAngle="90"
          lineCap="butt"
          value={this.state.value}
        />
        <IncDecClose
          x="c"
          y="b"
          w="100%"
          h="40"
          onChanged={delta => {
            this.addValue(delta);
          }}
        />
      </Window>
    );
  }
}
