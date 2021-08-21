import React, { Component } from 'react';

import { View, SlideView, SlideIndicator, Label, Window } from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

const pagesNr = 10;
export class SlideViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: value });
  }

  render() {
    console.log('SlideViewPage');

    let pages = [];
    for (let i = 0; i < pagesNr; i++) {
      pages.push(
        <View w="100%" h="100%">
          <Label w="100%" h="100%" text={'page-' + i} />
        </View>
      );
    }

    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <SlideView
          w="100%"
          h="80%"
          value={Math.abs(this.state.value) % pagesNr}
        >
          {pages}
        </SlideView>
        <SlideIndicator
          x="0"
          y="b:100"
          w="100%"
          h="20"
          defaultPaint="stroke_rect"
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
