import React, { Component } from 'react';

import { TextSelector, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class TextSelectorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: Math.abs(value) % 31 });
  }

  render() {
    console.log('TextSelectorPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <TextSelector
          x="c"
          y="m"
          w="200"
          h="200"
          options="1-31-%02d"
          loopOptions="true"
          enableValueAnimator="false"
          selectedIndex={this.state.value}
          onChanged={(element, evt) => {
            this.setState({ value: element.selectedIndex });
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
