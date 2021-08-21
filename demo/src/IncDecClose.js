import React, { Component } from 'react';

import { app, Button, View } from 'react-awtk';

export class IncDecClose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  onChanged(delta) {
    if (this.props.onChanged) {
      this.props.onChanged(delta);
    }
  }

  render() {
    console.log('LabelPage');
    return (
      <View
        x="c"
        y="b"
        w="100%"
        h="40"
        childrenLayout="default(r=1,c=3,s=5,m=5)"
      >
        <Button
          text="+"
          onClick={() => {
            this.onChanged(1);
          }}
        ></Button>
        <Button
          text="-"
          count={this.state.count}
          onClick={() => {
            this.onChanged(-1);
          }}
        ></Button>
        <Button
          text="Back"
          onClick={() => {
            app.goBack();
          }}
        ></Button>
      </View>
    );
  }
}
