import { Container } from "./Container";
import { Component } from "./Base";

export interface Root {
  element: Component;
  afterCommit: (host: Root) => void;
}

export default (props: {}) => {
  const containerProps = Container(
    () => {},
    () => {}
  );

  const afterCommit = (host: Component) => {
  };

  return {
    ...containerProps,
    afterCommit
  };
};
