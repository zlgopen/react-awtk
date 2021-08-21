import React, { Component } from 'react';

import { app } from 'react-awtk';
import { toWindowName } from './utils';

export class ImageAnimationPage extends Component {
  constructor(props) {
    super(props);
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
    console.log('ImageAnimationPage');
    return (
      <window
        closeCurrent={this.props.closeCurrent}
        animHint="htranslate"
        name={toWindowName(this)}
      >
        <view x="0" y="0" w="100%" h="80%" children_layout="default(r=4,c=4)">
          <image_animation
            image="ani"
            start_index="1"
            end_index="9"
            auto_play="true"
            interval="50"
            delay="100"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="9"
            auto_play="true"
            interval="50"
            delay="200"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="9"
            auto_play="true"
            interval="50"
            delay="300"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="9"
            auto_play="true"
            interval="50"
            delay="400"
          />

          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="500"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="600"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="700"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="800"
          />

          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="900"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="1000"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="1100"
          />
          <image_animation
            image="ani"
            sequence="123456789abc"
            auto_play="true"
            interval="50"
            delay="1200"
          />

          <image_animation
            image="ani"
            reverse="true"
            start_index="1"
            end_index="12"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="1300"
          />
          <image_animation
            image="ani"
            reverse="true"
            sequence="123456789abc"
            auto_play="true"
            interval="50"
            delay="1400"
          />
          <image_animation
            image="ani"
            start_index="1"
            end_index="12"
            format="%s%x"
            show_when_done="true"
            loop="false"
            auto_play="true"
            interval="500"
            delay="1500"
          />

          <image_animation
            image="ani"
            start_index="1"
            end_index="100"
            format="%s%x"
            auto_play="true"
            interval="50"
            delay="1600"
          />
        </view>

        <button
          name="close"
          x="center"
          y="bottom:50"
          w="50%"
          h="50"
          text="close"
          onClick={() => {
            app.goBack();
          }}
        />
      </window>
    );
  }
}
