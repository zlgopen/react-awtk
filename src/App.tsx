import * as React from 'react';
import * as awtk from "awtk-js";
import * as backend from './backends/index'

class HistoryItem {
  constructor(component: any, props: any) {
    this.component = component;
    this.props = props || {};
  }

  public component: any;
  public props: any;
  public native: any;
}

class History {
  public root: any = null;
  public history: Array<HistoryItem> = [];

  init(w: number, h: number, title: string): any {
    backend.init(w, h, title);
  }

  quit(): any {
    backend.quit();
    process.exit(0);
  }

  goTo(component: any, props: any): Boolean {
    props = props || {};
    this.history.push(new HistoryItem(component, props));

    if (this.root) {
      this.root.forceUpdate();
    }

    return true;
  }

  goBack(): Boolean {
    let win = this.getTopWindow();
    if (win) {
      win.back();
    }

    return true;
  }
  
  goHome(): Boolean {
    if (this.history.length > 1) {
      let last = this.history.length - 1;
      this.history.forEach((iter, index) => {
        if(index > 0) {
          let item = this.history[index];  
          if(index === last) {
            item.native.closeWindow();
          } else {
            item.native.closeWindowForce();
          }
        }
      });
      this.history.length = 1;
    }

    return true;
  }
  
  closeWindow(): Boolean {
    let win = this.getTopWindow();
    if (win) {
      win.closeWindow();
    }

    return true;
  }

  onWindowOpen(native: any): Boolean {
    if (this.history.length > 0) {
      this.history[this.history.length - 1].native = native;
      return true;
    } else {
      throw new Error('history is empty');
      return false;
    }
  }

  onWindowClose(native: any): Boolean {
    if (this.history.length > 0) {
      this.history.forEach(function (iter, index, arr) {
        if (iter.native === native) {
          console.log(`remove ${native.name} from history`);
          arr.splice(index, 1);
        }
      });

      if (this.root) {
        this.root.forceUpdate();
      }
    }
    return true;
  }

  findWindow(name: string): awtk.TWindow | null {
    let item = this.history.find(function (iter, index, arr) {
      return (iter.native && iter.native.name === name);
    });

    return item ? item.native : null;
  }

  getTopWindow(): awtk.TWindow | null {
    if (this.history.length > 0) {
      return this.history[this.history.length - 1].native;
    }

    return null;
  }
  
  getPrevWindow(): awtk.TWindow | null {
    if (this.history.length > 1) {
      return this.history[this.history.length - 2].native;
    }

    return null;
  }

  confirm(title:string, content:string): Boolean {
    return awtk.TDialog.confirm(title, content) == awtk.TRet.OK;
  }
}

export let app = new History();

export class App extends React.Component {
  constructor(props: any) {
    super(props);
    app.root = this;
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    if (app.history.length > 0) {
      const current = app.history[app.history.length - 1];
      const Page = current.component;
      return (
        <Page {...current.props} />
      )
    } else {
      if (this.props.children) {
        return (this.props.children)
      } else {
        app.quit();
      }
    }
  }
}
