import React from "react";
import { IconContainer, InputContainer, InputText } from "./style";

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };
