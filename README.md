# react-awtk

## 介绍

> 本项目基于 [valence-native](https://valence-native.js.org) 实现，在此对原作者表示感谢。本项目目前处于实验阶段，欢迎大家一起完善。

反应式 GUI 编程已经成为 Web、桌面和移动开发的主流范式，[reactjs](https://reactjs.org/) 是反应式 GUI 编程的主要代表。[react-awtk](https://github.com/zlgopen/react-awtk) 使得开发者可以用 [reactjs](https://reactjs.org/) 的方式来开发 [AWTK](https://github.com/zlgopen/awtk) 应用程序。

主要特色：

- 原生的窗口动画和控件动画。
- 内置 Router 实现窗口之间的导航。
- JSX 兼容 AWTK Designer 生成的 XML。
- 兼容 AWTK Designer 生成的各种资源。
- 目前支持 nodejs/web，以后会增加对 quickjs 和 jerryscript 的支持。

示例

```jsx
export class CheckButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  addValue(delta) {
    let value = this.state.value + delta;
    this.setState({ value: value % 2 });
  }

  render() {
    console.log('CheckButtonPage');
    return (
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
        <Label x="c" y="100" w="80%" h="30" text={this.state.value} />
        <CheckButton
          x="c"
          y="160"
          w="100"
          h="22"
          text="Click me"
          value={this.state.value}
          onChanged={(element, evt) => {
            this.setState({ value: element.getValue() });
          }}
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
```

> 以下以 nodejs 版本为例

## 准备

> 请先参考 [awtk](https://github.com/zlgopen/awtk) 建立对应平台的开发环境。

1. 获取 awtk 并编译

```
git clone https://github.com/zlgopen/awtk.git
cd awtk; scons; cd -
```

2. 获取 awtk-nodejs 并编译

```
git clone https://github.com/zlgopen/awtk-nodejs.git
cd awtk-nodejs
```

如果没有安装 node-gyp，请用下列命令安装：

```
npm install -g node-gyp
node-gyp configure
```

```
npm install
npm run build;
```

3. 获取 react-awtk 并编译

```
git clone https://github.com/zlgopen/react-awtk.git
cd react-awtk
npm install
npm run build
```

## 运行 demo

- 进入 demo 目录

```
cd demo
```

- 安装依赖

```
npm install
```

- 生成资源

```
python scripts/update_res.py all
```

- 运行

```
npm run build
npm run start
```

- 使用 vscode 开发和调试。

```
code .
```

## 文档

- [入门指南](docs/get_started.md)
- [Web 版本使用方法](docs/awtk_web.md)

## 参考资料：

- https://reactjs.org/
- http://www.hackingwithreact.com/
