//@ts-ignore
import * as deepForceUpdate from "react-deep-force-update";
import DesktopRenderer from "../reconciler";
import { createElement } from "../utils/createElement";
import * as ReactReconciler from "react-reconciler";

export let ROOT_NODE: any = {};

export let container: ReactReconciler.FiberRoot;

const AppRegistry = {
  registerComponent: (name: string, component: React.ComponentType) => {
    const newComponent = component;
    ROOT_NODE = createElement("ROOT", {});
    container = DesktopRenderer.createContainer(ROOT_NODE);
    DesktopRenderer.updateContainer(newComponent, container, null);
  },
};

export default AppRegistry;
