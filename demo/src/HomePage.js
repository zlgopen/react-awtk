import React, { Component } from 'react';

import { app, Window, Button } from 'react-awtk';

import { toWindowName } from './utils';
import { SwitchPage } from './SwitchPage';
import { SlideViewPage } from './SlideViewPage';
import { ListViewPage } from './ListViewPage';
import { CheckButtonPage } from './CheckButtonPage';
import { ComboBoxPage } from './ComboBoxPage';
import { TextSelectorPage } from './TextSelectorPage';
import { RadioButtonPage } from './RadioButtonPage';
import { GaugePage } from './GaugePage';
import { LabelPage } from './LabelPage';
import { FooPage } from './FooPage';
import { BarPage } from './BarPage';
import { DialogPage } from './DialogPage';
import { OverlayPage } from './OverlayPage';
import { AnimatorPage } from './AnimatorPage';
import { ProgressBarPage } from './ProgressBarPage';
import { EditPage } from './EditPage';
import { SliderPage } from './SliderPage';
import { ProgressCirclePage } from './ProgressCirclePage';
import { ImageValuePage } from './ImageValuePage';
import { ImageAnimationPage } from './ImageAnimationPage';

export class HomePage extends Component {
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
    return (
      <Window
        closable="no"
        animHint="htranslate"
        name={toWindowName(this)}
        childrenLayout="default(c=2, h=36, m=5, s=5)"
      >
        <Button
          text="Gauge"
          onClick={() => {
            app.goTo(GaugePage, {
              closeCurrent: false,
              onResult: value => {
                console.log(`result is ${value}`);
              },
            });
          }}
        />
        <Button
          text="Label"
          onClick={() => {
            app.goTo(LabelPage);
          }}
        />
        <Button
          text="ImageValue"
          onClick={() => {
            app.goTo(ImageValuePage);
          }}
        />
        <Button
          text="ProgressBar"
          onClick={() => {
            app.goTo(ProgressBarPage);
          }}
        />
        <Button
          text="Edit"
          onClick={() => {
            app.goTo(EditPage);
          }}
        />
        <Button
          text="ProgressCircle"
          onClick={() => {
            app.goTo(ProgressCirclePage);
          }}
        />
        <Button
          text="Slider"
          onClick={() => {
            app.goTo(SliderPage);
          }}
        />
        <Button
          text="Switch"
          onClick={() => {
            app.goTo(SwitchPage);
          }}
        />
        <Button
          text="CheckButton"
          onClick={() => {
            app.goTo(CheckButtonPage);
          }}
        />
        <Button
          text="RadioButton"
          onClick={() => {
            app.goTo(RadioButtonPage);
          }}
        />
        <Button
          text="ComboBox"
          onClick={() => {
            app.goTo(ComboBoxPage);
          }}
        />
        <Button
          text="TextSelector"
          onClick={() => {
            app.goTo(TextSelectorPage);
          }}
        />
        <Button
          text="SlideView"
          onClick={() => {
            app.goTo(SlideViewPage);
          }}
        />
        <Button
          text="ListView"
          onClick={() => {
            app.goTo(ListViewPage);
          }}
        />
        <Button
          text="Animator"
          onClick={() => {
            app.goTo(AnimatorPage);
          }}
        />
        <Button
          text="Foo"
          onClick={() => {
            app.goTo(FooPage);
          }}
        />
        <Button
          text="Bar"
          onClick={() => {
            app.goTo(BarPage);
          }}
        />
        <Button
          text="ImageAnimation"
          onClick={() => {
            app.goTo(ImageAnimationPage);
          }}
        />
        <Button
          text="Overlay"
          onClick={() => {
            app.goTo(OverlayPage);
          }}
        />
        <Button
          text="Dialog"
          onClick={() => {
            app.goTo(DialogPage);
          }}
        />
        <Button
          floating="true"
          x="c"
          y="b:5"
          w="80"
          h="36"
          text="Quit"
          onClick={() => {
            app.quit();
          }}
        />
      </Window>
    );
  }
}
