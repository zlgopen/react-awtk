import React, { Component } from 'react';
import { LabelPage } from './LabelPage';

import { app } from 'react-awtk';

import { toWindowName } from './utils';

export function DialogPage(props) {
  console.log('DialogPage');
  return (
    <dialog
      anim_hint="popup"
      highlight="default(start_alpha=0, end_alpha=80)"
      name={toWindowName('DialogPage')}
      x="0"
      y="bottom"
      w="100%"
      h="160"
    >
      <dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
      <dialog_client x="0" y="bottom" w="100%" h="-30">
        <label
          name=""
          x="center"
          y="middle:-20"
          w="200"
          h="30"
          text="Are you ready?"
        />
        <button
          x="10"
          y="bottom:10"
          w="40%"
          h="30"
          text="Yes"
          onClick={() => {
            app.goTo(LabelPage, { closeCurrent: true });
          }}
        />
        <button
          x="right:10"
          y="bottom:10"
          w="40%"
          h="30"
          text="No"
          onClick={() => {
            app.goBack();
          }}
        />
      </dialog_client>
    </dialog>
  );
}
