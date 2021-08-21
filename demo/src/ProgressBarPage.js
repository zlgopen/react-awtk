import React, { Component } from 'react';

import { ProgressBar, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class ProgressBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    if (value < 0) {
      value = 100;
    }
    this.setState({ value: value });
  }

  render() {
    console.log('ProgressBarPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <ProgressBar x="c" y="100" w="80%" h="30" value={this.state.value} />
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
