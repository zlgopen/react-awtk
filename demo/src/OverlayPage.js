import React, { Component } from 'react';
import { LabelPage } from './LabelPage';

import { app } from 'react-awtk';

import { toWindowName } from './utils';

export function OverlayPage(props) {
  console.log('OverlayPage');
  const closeCurrent = props ? props.closeCurrent : false;

  return (
    <overlay x="c" y="m" w="80%" h="80" name={toWindowName('OverlayPage')}>
      <button
        w="100%"
        h="100%"
        text="Close Current And Open"
        onClick={() => {
          app.goTo(LabelPage, { closeCurrent: true });
        }}
      />
    </overlay>
  );
}
