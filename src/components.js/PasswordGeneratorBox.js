import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, Typography } from "@mui/material";
import anime from "animejs";

//
import SettingsBox from "./SettingsBox";
import SettingLabel from "./SettingLabel";
import SettingCheckBox from "./SettingCheckbox";
import PasswordLengthSlider from "./PasswordLengthSlider";
import PasswordTextArea from "./PasswordTextArea";
//

const PasswordGeneratorBox = (props) => {
  const {
    password,
    passwordLength,
    setPasswordLength,
    isUppercaseIncluded,
    isLowercaseIncluded,
    isNumbersIncluded,
    isSymbolsIncluded,
    handleGeneratePasswordClick,
    handleSettingsToggles,
    className,
  } = props;

  // password change animation
  let isFirstRender = useRef(true);
  const passwordTextRef = useRef(null);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      anime
        .timeline({ targets: passwordTextRef.current })
        .add({
          backgroundColor: "rgb(204, 204, 204)",
          duration: 0,
        })
        .add({
          backgroundColor: "rgb(18, 18, 18)",
          duration: 1000,
          easing: "linear",
        });
    }
  }, [password]);

  // copy password button
  const handleCopyPassword = async () => {
    await navigator.clipboard.writeText(password);
  };

  return (
    //   box
    <Box
      sx={{
        maxWidth: { sm: "60%" },
        backgroundColor: "#262626",
        border: (theme) => `3px solid ${theme.palette.primary.main}`,
        borderRadius: "10px",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
      className={className}
    >
      {/* password box */}
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: "0.5em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.3em",
        }}
      >
        {/* password text */}
        <PasswordTextArea
          ref={passwordTextRef}
          password={password}
        ></PasswordTextArea>
        {/* copy button */}
        <IconButton onClick={handleCopyPassword}>
          <ContentCopyIcon></ContentCopyIcon>
        </IconButton>
      </Box>

      {/* settings */}
      <SettingsBox sx={{ marginTop: "1em" }}>
        <SettingLabel variant="body1">Password Length</SettingLabel>
        <PasswordLengthSlider
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        ></PasswordLengthSlider>
      </SettingsBox>
      <SettingsBox>
        <SettingLabel variant="h4">A-Z</SettingLabel>
        <SettingCheckBox
          checked={isUppercaseIncluded}
          onChange={handleSettingsToggles("uppercase")}
        ></SettingCheckBox>
      </SettingsBox>
      <SettingsBox>
        <SettingLabel variant="h4">a-z</SettingLabel>
        <SettingCheckBox
          checked={isLowercaseIncluded}
          onChange={handleSettingsToggles("lowercase")}
        ></SettingCheckBox>
      </SettingsBox>
      <SettingsBox>
        <SettingLabel variant="h4">0-9</SettingLabel>
        <SettingCheckBox
          checked={isNumbersIncluded}
          onChange={handleSettingsToggles("numbers")}
        ></SettingCheckBox>
      </SettingsBox>
      <SettingsBox>
        <SettingLabel variant="h4">!@#$%^&*</SettingLabel>
        <SettingCheckBox
          checked={isSymbolsIncluded}
          onChange={handleSettingsToggles("symbols")}
        ></SettingCheckBox>
      </SettingsBox>

      {/* generate button */}
      <Button
        variant="contained"
        sx={{ alignSelf: "center", marginTop: "0.5em" }}
        onClick={handleGeneratePasswordClick}
      >
        <Typography varinat="h4" sx={{ fontSize: "1.2rem" }}>
          Generate
        </Typography>
      </Button>
    </Box>
  );
};

export default PasswordGeneratorBox;
