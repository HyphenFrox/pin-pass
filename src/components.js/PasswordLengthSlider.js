import { Box, styled } from "@mui/system";
import { Slider } from "@mui/material";
import React from "react";

const SliderInput = styled("input")({
  maxWidth: 50,
});

const PasswordLengthSlider = (props) => {
  const { passwordLength, setPasswordLength } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
      <Slider
        name="password-length-slider"
        min={1}
        max={128}
        value={passwordLength}
        onChange={(event) => setPasswordLength(event.target.value)}
        sx={{ minWidth: 100 }}
      />
      <SliderInput
        type="number"
        name="password-length-slider"
        value={passwordLength}
        onChange={(event) => setPasswordLength(Number(event.target.value))}
      />
    </Box>
  );
};

export default PasswordLengthSlider;
