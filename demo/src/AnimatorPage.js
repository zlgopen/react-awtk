import React, { Component } from 'react';

import { app, Button, Image, ProgressBar, Window } from 'react-awtk';

import { toWindowName } from './utils';

export function AnimatorPage(props) {
  console.log('AnimatorPage');
  const closeCurrent = props ? props.closeCurrent : false;

  return (
    <Window
      closable="no"
      closeCurrent={closeCurrent}
      animHint="htranslate"
      name={toWindowName('AnimatorPage')}
    >
      <Image
        drawType="icon"
        image="earth"
        x="c"
        y="m"
        w="40"
        h="40"
        animation="rotation(from=0, to=6.28, repeatTimes=0, duration=2000, easing=linear)"
      />
      <ProgressBar
        x="c"
        y="40"
        w="90%"
        h="40"
        animation="value(from=50, to=100, yoyo_times=1000, duration=1000, delay=1000)"
      />

      <Button
        x="c"
        y="b:40"
        w="90%"
        h="40"
        text="Back"
        onClick={() => {
          app.closeWindow();
        }}
      ></Button>
    </Window>
  );
}
