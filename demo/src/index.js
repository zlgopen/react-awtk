const lcdW = 320;
const lcdH = 480;
const title = 'Hello';

import { HomePage } from './HomePage';
import React, { Component } from 'react';
import { app, App, AppRegistry } from 'react-awtk';

export default class Main extends Component {
  render() {
    return <App></App>;
  }
}

app.init(lcdW, lcdH, title);

app.goTo(HomePage);
AppRegistry.registerComponent(title, <Main />);
