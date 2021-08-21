import React, { Component } from 'react';

import {
  Switch,
  Image,
  ScrollBar,
  ListItem,
  ScrollView,
  View,
  ListView,
  ListIndicator,
  Label,
  Window,
} from 'react-awtk';

import { IncDecClose } from './IncDecClose';
import { toWindowName } from './utils';

const itemsNr = 100;
export class ListViewPage extends Component {
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
    console.log('ListViewPage');

    let pages = [];
    for (let i = 0; i < itemsNr; i++) {
      pages.push(
        <ListItem
          style={i % 2 == 0 ? 'even' : 'odd'}
          children_layout="default(rows=1,cols=0)"
        >
          <Image draw_type="icon" w="40" image="earth" />
          <Label w="-30" text={i + '.Hello AWTK !'}>
            <Switch x="r:10" y="m" w="60" h="20" value={i % 2 === 0} />
          </Label>
        </ListItem>
      );
    }

    return (
      <Window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <ListView
          w="100%"
          h="80%"
          itemHeight="60"
          value={Math.abs(this.state.value) % itemsNr}
        >
          <ScrollView name="view" x="0" y="0" w="100%" h="100%">
            {pages}
          </ScrollView>
          <ScrollBar
            isMobile="true"
            name="bar"
            x="right"
            y="0"
            w="6"
            h="100%"
          />
        </ListView>
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
