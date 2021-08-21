import * as PropTypes from "prop-types";
import { TextFuncs } from "./TextFuncs";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      VIRTUALTEXT: React.PropsWithChildren<Props>;
    }
  }
}

export interface Props {
  style?: React.CSSProperties;
}

export default (p: Props) => {
  const element = {};
  let props = { ...p };
  let styleProp = props.style;

  function updateProps(props:any) {
  }

  const textProps = TextFuncs(() => {}, styleProp || {});

  updateProps(props);

  return {
    ...textProps,
    element,
    updateProps,
    type: "fullText"
  };
};
