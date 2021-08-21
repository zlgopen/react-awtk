import React, { Component } from 'react';

import { Text, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

export class LabelPage extends Component {
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

  getTextColor() {
    const value = this.state.value;
    return value < 10 && value > -10 ? 'green' : 'red';
  }

  componentDidMount() {
    console.log(`componentDidMount ${this.constructor.name}`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate ${this.constructor.name}`);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount ${this.constructor.name}`);
  }

  render() {
    console.log('LabelPage');
    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <Text
          x="c"
          y="100"
          w="80%"
          h="80"
          style={{ fontSize: 28, textColor: this.getTextColor() }}
        >
          Count: {this.state.value}
        </Text>
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
