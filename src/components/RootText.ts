import * as PropTypes from "prop-types";
import { TextFuncs } from "./TextFuncs";
import * as Backend from "../backends/index";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ROOTTEXT: React.PropsWithChildren<Props>;
    }
  }
}

export interface Props {
  style?: React.CSSProperties;
}

export default (p: Props) => {
  const TextElement = Backend.TextElement;
  const element = new TextElement();

  let props = { ...p };

  const styleProp = { s: props.style };

  function updateProps(changes: object) {
    element.updateProps(changes);
  }

  const textProps = TextFuncs((text: string) => {
    element.setText(text);
  }, styleProp.s || {});

  updateProps(props);

  return {
    ...textProps,
    element,
    updateProps,
    type: "fullText"
  };
};
