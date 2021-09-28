import React, { forwardRef } from "react";
import { styled } from "@mui/material";

const StyledTextArea = styled("textarea")({
  resize: "none",
  border: "none",
  outline: "none",
  borderRadius: 0,
  cursor: "default",
  backgroundColor: "inherit",
  color: "white",
  fontSize: "1.2rem",
  flexGrow: 1,
});

const PasswordTextArea = forwardRef((props, ref) => {
  const { password } = props;
  return (
    <StyledTextArea
      ref={ref}
      name="password"
      readOnly={true}
      value={password}
    ></StyledTextArea>
  );
});

export default PasswordTextArea;
