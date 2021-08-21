import React, { Component } from 'react';

import { BarPage } from './BarPage';
import { LabelPage } from './LabelPage';
import { DialogPage } from './DialogPage';
import { OverlayPage } from './OverlayPage';
import { AnimatorPage } from './AnimatorPage';

import { app, Button, Image, ProgressBar, Window } from 'react-awtk';

import { toWindowName } from './utils';

export function FooPage(props) {
  console.log('FooPage');
  const closeCurrent = props ? props.closeCurrent : false;

  return (
    <Window
      closable="yes"
      closeCurrent={closeCurrent}
      animHint="htranslate"
      name={toWindowName('FooPage')}
    >
      <Button
        x="c"
        y="m:-80"
        w="90%"
        h="40"
        text="Overlay"
        onClick={() => {
          app.goTo(OverlayPage);
        }}
      />
      <Button
        x="c"
        y="m:80"
        w="90%"
        h="40"
        text="Dialog"
        onClick={() => {
          app.goTo(DialogPage);
        }}
      />
      <Button
        x="c"
        y="m"
        w="90%"
        h="40"
        text="Close Current And Open"
        onClick={() => {
          app.goTo(LabelPage, { closeCurrent: true });
        }}
      />
      <Button
        x="c"
        y="b:50"
        w="90%"
        h="40"
        text="goTo(Bar)"
        onClick={() => {
          app.goTo(BarPage, { closeCurrent: true });
        }}
      />
    </Window>
  );
}
