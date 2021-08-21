import React, { Component } from 'react';

import { Edit, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class EditPage extends Component {
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
    console.log('EditPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <Edit
          x="c"
          y="160"
          w="80%"
          h="30"
          value={this.state.value}
          onChanged={(element, evt) => {
            this.setState({ value: element.getInt() });
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
