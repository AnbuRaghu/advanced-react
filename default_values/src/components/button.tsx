import React, { ReactElement } from "react";

const Button = ({
  type,
  icon,
  size,
}: {
  type?: string;
  icon: ReactElement;
  size?: string;
}) => {
  const defaultProps = {
    size: size === "lg" ? "lg" : "md",
    color: type === "primary" ? "white" : "black",
  };

  const newProps = {
    ...defaultProps,
    ...icon.props,
  };

  const clonedIcon = React.cloneElement(icon, newProps);

  return <button>Submit {clonedIcon}</button>;
};

export default Button;
