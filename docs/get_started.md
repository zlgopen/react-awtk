# 入门指南

## 1.程序入口

使用 src/index.js 为应用程序的入口，一般根据情况修改一下 lcdW/lcdH/title 等参数即可：

```js
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
```

## 2.class 组件

> 完善示例请参考 HomePage.js

```js
export class HomePage extends Component {
  render() {
    return (
      <Window
        closable="no"
        animHint="htranslate"
        name={toWindowName(this)}
        childrenLayout="default(c=2, h=40, m=10, s=10)"
      >
        ...
        <Button
          text="Quit"
          onClick={() => {
            app.quit();
          }}
        />
      </Window>
    );
  }
}
```

> 顶级页面必须是 Window，而且必须指定唯一的名称。

## 3.function 组件

> 完善示例请参考 AnimatorPage.js

```js
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
```

## 4.Designer 兼容模式

JSX 兼容 AWTK Designer 生成的 UI XML 文件，所有的 tag 都是小写，单词之间用英文下画线连接，无需导入相应的控件。

> 完善示例请参考 ImageAnimationPage.js

```js
export class ImageAnimationPage extends Component {
  constructor(props) {
    super(props);
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
```

## 5.窗口导航

### 5.1 打开新窗口

> 原型

```js
app.goTo(target, options);
```

> 示例

```js
<Button
  text="ImageAnimation"
  onClick={() => {
    app.goTo(ImageAnimationPage);
  }}
/>
```

options 的作为新窗口的 props，另外有两个特殊属性：

### 5.1.1 closeCurrent 用于打开新窗口时关闭当前窗口。

```js
<Button
  x="c"
  y="b:40"
  w="90%"
  h="40"
  text="Close Current And Open"
  onClick={() => {
    app.goTo(LabelPage, { closeCurrent: true });
  }}
/>
```

目标窗口必须设置 closeCurrent 属性。

```js
<Window
  closeCurrent={this.props.closeCurrent}
  animHint="htranslate"
  name={toWindowName(this)}
>
```

### 5.1.2 onResult 用于返回结果。

```js
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
```

```js
<Window
  closeCurrent={this.props.closeCurrent}
  animHint="htranslate"
  name={toWindowName(this)}
  onWindowClose={() => {
    if (this.props.onResult) {
      this.props.onResult(this.state.value);
    }
  }}
>
```

### 5.2 返回上一级窗口

> 原型

```
app.goBack()
```

> 说明

goBack 的行为取决于窗口的 closable 属性：

- closable="no" 忽略。
- closable="yes" 直接关闭，相当于 app.closeWindow()
- closable="confirm" 触发 onRequestCloseWindow 事件，由窗口自己决定。

> 示例

```js
<Window
  closeCurrent={this.props.closeCurrent}
  animHint="htranslate"
  name={toWindowName(this)}
  closable="confirm"
  onRequestCloseWindow={(element, evt) => {
    console.log(element, evt);
    if (app.confirm('Confirm', 'Are your sure?')) {
      app.closeWindow();
    }
  }}
>

<Button
  text="Back"
  onClick={() => {
    app.goBack();
  }}
/>
```

> 也是点击 system bar 上的关闭按钮的行为

### 5.3 关闭当前窗口

> 原型

```
app.closeWindow()
```

> 示例

```js
<Button
  text="Close"
  onClick={() => {
    app.closeWindow();
  }}
/>
```

### 5.5 回到主窗口

> 原型

```js
app.goHome();
```

> 示例

```js
<Button
  text="Home"
  onClick={() => {
    app.goHome();
  }}
/>
```

### 5.6 退出应用程序

> 原型

```js
app.quit();
```

> 示例

```js
<Button
  text="Quit"
  onClick={() => {
    app.quit();
  }}
/>
```
