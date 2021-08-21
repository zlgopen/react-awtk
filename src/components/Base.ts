import { BaseElement } from "../backends/index";

export interface Component {
  element: BaseElement;
  parent: Component;
  children?: Component[];
  updateProps: (payload: object) => void;
  appendChild?: (child: Component) => void;
  removeChild?: (child: Component) => void;
  insertChild?: (child: Component, beforeChild: Component) => void;
}
