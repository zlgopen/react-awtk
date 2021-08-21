# 如何增加新组件

## 1. 增加组件

src/components/Label.ts

```js
import AnyWidget from './AnyWidget';

export default (p: any) => {
  return AnyWidget('LABEL', p);
};
```

## 2. 创建控件

src/utils/createElement.ts

```js
import {
  Root,
  App,
  View,
  Window,
  VirtualText,
  RootText,
  Image,
  TextInput,
  PickerInternal,
  Button,
  Label
} from "../components/";

function createElement(type: string, props: any): any {
  const COMPONENTS = {
  ...
    LABEL: () => Label(props),

  };
  return (COMPONENTS as any)[type]() || COMPONENTS.default;
}

```

## 3.导出控件

src/index.ts

```js
const Label = "LABEL";

export {
  ...
  Label,
};
```
