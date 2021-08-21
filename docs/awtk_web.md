# Web 版本的使用方法

## 准备

> 请先参考 [awtk](https://github.com/zlgopen/awtk) 建立对应平台的开发环境。

1. 获取 awtk 并编译

```
git clone https://github.com/zlgopen/awtk.git
cd awtk; scons; cd -
```

2. 获取 awtk-web 并编译

```
git clone https://github.com/zlgopen/awtk-web.git
```

> 请根据 awtk-web 的文档安装开发环境

3. 获取 react-awtk 并编译

```
git clone https://github.com/zlgopen/react-awtk.git
cd react-awtk

```

修改 package.json

将

```
"awtk-js": "file:../awtk-nodejs"
```

改为

```
"awtk-js": "file:../awtk-web"
```

```
npm install
npm run build
```

## 准备 demo

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

- 编译

```
npm run build-web
```

## 运行 demo

- 进入 awtk-web 目录

```
cd ../../awtk-web
```

- 编译

```
./build_mac.sh ../react-awtk/demo/build_web.json all
```

开发时，可以只更新 app:

```
./build_mac.sh ../react-awtk/demo/build_web.json app
```

- 启动 web 服务器

```
python -m http.server 8080 --directory webroot
```

> 使用其它 web 服务器也可。

- 用浏览器打开 [http://localhost:8080/react-demo/index.html](http://localhost:8080/react-demo/index.html)
