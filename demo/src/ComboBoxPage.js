import React, { Component } from 'react';

import { ComboBox, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class ComboBoxPage extends Component {
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
    console.log('ComboBoxPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <ComboBox
          x="c"
          y="160"
          w="160"
          h="22"
          readonly="true"
          options="left;center;right;"
          value={Math.abs(this.state.value) % 3}
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
