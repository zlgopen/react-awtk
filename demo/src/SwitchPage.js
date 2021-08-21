import React, { Component } from 'react';

import { Switch, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class SwitchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: value % 2 });
  }

  render() {
    console.log('SwitchPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <Switch
          x="c"
          y="160"
          w="60"
          h="22"
          value={this.state.value}
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
