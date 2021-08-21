import React, { Component } from 'react';

import { CheckButton, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class RadioButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    if (value < 0) {
      value = 0;
    }
    this.setState({ value: value });
  }

  render() {
    console.log('RadioButtonPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <CheckButton
          x="c"
          y="130"
          w="25%"
          h="22"
          text="1"
          radio="true"
          value={this.state.value === 1}
          onChanged={(element, evt) => {
            this.setState({ value: 1 });
          }}
        />
        <CheckButton
          x="c"
          y="160"
          w="25%"
          h="22"
          text="2"
          radio="true"
          value={this.state.value === 2}
          onChanged={(element, evt) => {
            this.setState({ value: 2 });
          }}
        />
        <CheckButton
          x="c"
          y="190"
          w="25%"
          h="22"
          text="3"
          radio="true"
          value={this.state.value === 3}
          onChanged={(element, evt) => {
            this.setState({ value: 3 });
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
