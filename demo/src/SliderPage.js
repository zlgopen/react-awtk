import React, { Component } from 'react';

import { Slider, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1000,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: value });
  }

  render() {
    console.log('SliderPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <Slider
          x="c"
          y="160"
          w="80%"
          h="30"
          value={this.state.value}
          onChanging={(element, evt) => {
            this.setState({ value: element.getValue() });
          }}
          onChanged={(element, evt) => {
            this.setState({ value: element.getValue() });
          }}
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
