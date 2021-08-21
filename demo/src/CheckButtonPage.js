import React, { Component } from 'react';

import { app, CheckButton, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class CheckButtonPage extends Component {
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
    console.log('CheckButtonPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
        closable="confirm"
        onRequestCloseWindow={(element, evt) => {
          console.log(element, evt);
          if (app.confirm('Confirm', 'Are your sure?')) {
            app.closeWindow();
          }
        }}
      >
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <CheckButton
          x="c"
          y="160"
          w="100"
          h="22"
          text="Click me"
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
