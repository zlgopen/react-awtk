import { Container } from "./Container";
import * as backend from "../backends/index";

export interface Props {
  style?: React.CSSProperties;
  text: string | undefined,
}

export default (type: string, p: Props) => {
  const TWidgetWrapper = backend.TWidgetWrapper;
  const element = new TWidgetWrapper();

  let props = { ...p };
  const containerProps = Container(
    child => {
      child.element.setParent(element);
    },
    child => {
      child.element.del();
    },
    (child, i) => {
      child.element.setParent(element);
    }
  );

  function updateProps(changes: object) {
    element.updateProps(changes);
  }

  element.init(type, props);
  updateProps(props);

  return {
    ...containerProps,
    element,
    updateProps
  };
};
