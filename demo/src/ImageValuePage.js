import React, { Component } from 'react';

import { Window, ImageValue } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class ImageValuePage extends Component {
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
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <ImageValue
          x="c"
          y="m"
          w="100"
          h="40"
          format="%02d"
          image="num_"
          value={this.state.value}
        ></ImageValue>
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
