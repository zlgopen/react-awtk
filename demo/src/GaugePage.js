import React, { Component } from 'react';

import { Window, Gauge, GaugePointer } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class GaugePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: value });
  }

  render() {
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
        onWindowClose={() => {
          if (this.props.onResult) {
            this.props.onResult(this.state.value);
          }
        }}
      >
        <Gauge x="c" y="10" w="240" h="240" image="gauge_bg">
          <GaugePointer
            x="c"
            y="50"
            w="24"
            h="140"
            image="gauge_pointer"
            value={this.state.value}
          ></GaugePointer>
        </Gauge>
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
