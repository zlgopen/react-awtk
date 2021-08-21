import { app } from "../App"
import * as awtk from "awtk-js";
import { getCreateWidget } from "./WidgetFactory"

export function init(w: number, h: number, title: string) {
  awtk.init(w || 320, h || 480, title || 'Hello-AWTK', true);

  //enable system bar
  let win = awtk.TWindow.open('system_bar');
  let close = win.lookup('close', true);

  //rename close button to prevent default action
  close.setName('back');
  close.on(awtk.TEventType.CLICK, (evt: any) => {
    console.log('back button on systembar is clicked');
    app.goBack();
    return awtk.TRet.STOP;
  }, null);
}

export function quit(): void {
  awtk.TGlobal.quit();
}

interface Size {
  w: number;
  h: number;
}

let eventMap = new Map([
  ["on_click", awtk.TEventType.CLICK],
  ["on_pointer_down", awtk.TEventType.POINTER_DOWN],
  ["on_pointer_move", awtk.TEventType.POINTER_MOVE],
  ["on_pointer_up", awtk.TEventType.POINTER_UP],
  ["on_key_down", awtk.TEventType.KEY_DOWN],
  ["on_key_up", awtk.TEventType.KEY_UP],
  ["on_changed", awtk.TEventType.VALUE_CHANGED],
  ["on_changing", awtk.TEventType.VALUE_CHANGING],
  ["on_window_open", awtk.TEventType.WINDOW_OPEN],
  ["on_window_will_open", awtk.TEventType.WINDOW_WILL_OPEN],
  ["on_request_close_window", awtk.TEventType.REQUEST_CLOSE_WINDOW],
  ["on_window_close", awtk.TEventType.WINDOW_CLOSE],
]);

function fixPropName(str: string): string {
  let name = str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  return name;
}

function isUnsignedInteger(a: any): boolean {
  let n = parseInt(a, 10);
  let s = n.toString();

  return n >= 0 && s == a.toString();
}

export function desktopSize(): Size {
  return { w: 320, h: 480 }
}

export abstract class BaseElement {
  element: any;
  hasMouseTracking() {
  }
  setMouseTracking(v: boolean) {
  }
  setStyleSheet(obj: object) {
    let o = obj as any;
    let element = this.element as awtk.TWidget;

    this.updateSelfLayout(obj);
    for (let prop in o) {
      let value = o[prop];
      let name = fixPropName(prop);
      if (name === 'font_size') {
        element.setStyleInt(name, parseInt(value, 10));
      } else if (name === 'text_color') {
        element.setStyleStr(name, value);
      }
    }
  }

  updateSelfLayout(payload: any) {
    let element = this.element as awtk.TWidget;
    let x = element.x;
    let y = element.y;
    let w = element.w;
    let h = element.h;

    for (let prop in payload) {
      let value = payload[prop];
      if (prop === 'x' || prop === 'left') {
        x = value;
      } else if (prop === 'y' || prop === 'top') {
        y = value;
      } else if (prop === 'w' || prop === 'width') {
        w = value;
      } else if (prop === 'h' || prop === 'height') {
        h = value;
      }
    }

    if (x === element.x && y === element.y && w === element.w && h === element.h) {
      return;
    }

    let selfLayout = 'default('
    if (isUnsignedInteger(x) && isUnsignedInteger(y)) {
      element.move(+x, +y);
    } else {
      selfLayout += `x=${x}, y=${y},`
    }

    if (isUnsignedInteger(w) && isUnsignedInteger(h)) {
      element.resize(+w, +h);
    } else {
      selfLayout += `w=${w}, h=${h}`
    }
    selfLayout += ')';
    if (selfLayout !== 'default()') {
      element.setSelfLayout(selfLayout);
      console.log(selfLayout);
    }
    console.log(element.x, element.y, element.w, element.h);
  }
  isUnsignedInteger(x: any) {
    throw new Error("Method not implemented.");
  }

  updateProps(payload: any) {
    let element = this.element as awtk.TWidget;
    this.updateSelfLayout(payload);

    let props:Array<any> = [];
    let valueProp:any = null;
    for (let name in payload) {
      let prop = { name: fixPropName(name), value: payload[name] };
      if (name === 'value') {
        valueProp = prop;
      } else {
        props.push(prop);
      }
    }
    //keep the value be the last prop
    if (valueProp) {
      props.push(valueProp);
    }

    props.forEach(iter => {
      const name = iter.name;
      const value = iter.value;

      if (name === 'style' && typeof (value) !== 'string') {
        this.setStyleSheet(value);
      } else if (typeof (value) === 'function') {
        let etype = eventMap.get(name);
        if (etype) {
          let obj = this as any;
          if (!obj[name]) {
            element.on(etype, (evt: any) => {
              let e = awtk.TEvent.cast(evt);
              let func = obj[name] as Function;
              return func(element, e);
            }, null);
          }
          obj[name] = value;
        } else {
          console.log(`not supported event type: ${name}`);
        }
      } else if (name === 'x' || name === 'left') {
      } else if (name === 'y' || name === 'top') {
      } else if (name === 'w' || name === 'width') {
      } else if (name === 'h' || name === 'height') {
      } else if (typeof value === 'string') {
        element.setPropStr(name, value);
      } else if (typeof value === 'number') {
        element.setPropInt(name, +value);
      } else if (typeof value === 'boolean') {
        element.setPropBool(name, value);
      }
    });
  }

  setParent(elem: BaseElement) {
    //console.log("Set parent", this.element, elem.element);
    if (elem.element) {
      elem.element.addChild(this.element);
    }
  }

  del() {
    if (this.element.isWindow()) {
      console.log(`keep window ${this.element.name}`);
    } else {
      this.element.destroy();
    }
  }

  resize(width: number, height: number) {
    this.element.resize(width, height);
  }
  move(left: number, top: number) {
    this.element.move(left, top);
  }
  minSize(): Size {
    return { w: this.element.w, h: this.element.h };
  }
  show() {
    this.element.setVisible(true);
  }
  close() {
    this.element.destroy();
  }
  width(): number {
    return this.element.w;
  }
  height(): number {
    return this.element.h;
  }
}

function nullTWidget(): awtk.TWidget {
  return null as unknown as awtk.TWidget
}

export class TextElement extends BaseElement {
  constructor() {
    super();
    this.element = awtk.TLabel.create(nullTWidget(), 0, 0, 100, 30);
  }

  setText(text: string) {
    const json = JSON.parse(text);
    const fontSize = json.style.fontSize || 0;
    if (fontSize > 0) {
      this.element.setStyleInt("normal:font_size", fontSize);
    }
    const textColor = json.style.color;
    if (textColor) {
      this.element.setStyleStr("normal:text_color", textColor);
    }
    this.element.setText(json.text);
  }
}

const windowTags = ['WINDOW', 'OVERLAY', 'DIALOG', 'POPUP'];

export class TWidgetWrapper extends BaseElement {
  constructor() {
    super();
  }

  init(type: string, props: any) {
    let exist = false;
    const prevWindow = app.getPrevWindow();
    const create = getCreateWidget(type);
    const closeCurrent = props.closeCurrent || false;
    const isWindow = windowTags.indexOf(type) !== -1;
    const name = props.name;

    if (isWindow) {
      if (!name) {
        throw new Error('Window must have a unique name')
      }

      let win = app.findWindow(name)
      if (win) {
        console.log(`Window ${name} exist, reuse it`)
        this.element = win;
        win.destroyChildren();
        exist = true;
      }
    }

    if (!this.element) {
      this.element = create(nullTWidget(), 0, 0, 80, 32);
    }

    let element = this.element as awtk.TWidget;
    if (isWindow && !exist) {
      element.on(awtk.TEventType.WINDOW_CLOSE, () => {
        console.log(`${element.name} is closed`);
        app.onWindowClose(element);

        return awtk.TRet.REMOVE;
      }, 0);

      element.on(awtk.TEventType.WINDOW_OPEN, () => {
        console.log(`${element.name} is open`);
        if (prevWindow && closeCurrent) {
          prevWindow.closeWindowForce();
          console.log(`closeCurrent is true, close ${prevWindow.name}`);
        }
        app.onWindowOpen(element);
        return awtk.TRet.REMOVE;
      }, 0);
    }
  }

  getClosed(): boolean {
    return this.element.isWindowOpened();
  }
}
