import "./App.scss";
import React, { useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";

//
import PasswordGeneratorBox from "./components.js/PasswordGeneratorBox";
import generatePassword from "./utilities.js/generatePassword";
//

const StyledPasswordGeneratorBox = styled(PasswordGeneratorBox)({
  marginTop: "2em",
  marginLeft: "auto",
  marginRight: "auto",
});

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#aa00ff",
    },
    secondary: {
      main: "#ff80ab",
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
  },
});

const App = () => {
  const [passwordLength, setPasswordLength] = useState(14);
  const [isUppercaseIncluded, setIsUppercaseIncluded] = useState(true);
  const [isLowercaseIncluded, setIsLowercaseIncluded] = useState(true);
  const [isNumbersIncluded, setIsNumbersIncluded] = useState(true);
  const [isSymbolsIncluded, setIsSymbolsIncluded] = useState(true);
  const [password, setPassword] = useState("");

  // function to prevent user from unchecking all options
  const handleSettingsToggles = (type) => (event) => {
    const settings = [
      ["uppercase", isUppercaseIncluded, setIsUppercaseIncluded],
      ["lowercase", isLowercaseIncluded, setIsLowercaseIncluded],
      ["numbers", isNumbersIncluded, setIsNumbersIncluded],
      ["symbols", isSymbolsIncluded, setIsSymbolsIncluded],
    ];

    if (event.target.checked === true) {
      settings[settings.findIndex((setting) => setting[0] === type)][2](true);
    } else {
      // goes through the array untill it finds another option that is checked
      // so that means it's not the only options checked
      let isTheOnlyOne = true;
      for (let i = 1; i <= settings.length && isTheOnlyOne; ++i) {
        if (settings[i - 1][0] !== type && settings[i - 1][1] === true) {
          isTheOnlyOne = false;
        }
      }

      // if its's not the only one that is checked, allow user to check it
      if (!isTheOnlyOne) {
        settings[settings.findIndex((setting) => setting[0] === type)][2](
          false
        );
      }
    }
  };

  const handleGeneratePasswordClick = () => {
    const password = generatePassword({
      passwordLength,
      isUppercaseIncluded,
      isLowercaseIncluded,
      isNumbersIncluded,
      isSymbolsIncluded,
    });
    setPassword(password);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline></CssBaseline>
      {/* app */}
      <Box
        sx={{
          minHeight: "100%",
          color: "white",
          padding: { xs: "1em", sm: "1em 2em 1em 2em" },
        }}
      >
        {/* heading */}
        <Typography
          variant="h1"
          align="center"
          sx={{ fontFamily: "'Press Start 2P', cursive", fontSize: "2rem" }}
        >
          Pin Pass
        </Typography>
        {/* styled password generator box */}
        <StyledPasswordGeneratorBox
          password={password}
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
          isUppercaseIncluded={isUppercaseIncluded}
          isLowercaseIncluded={isLowercaseIncluded}
          isNumbersIncluded={isNumbersIncluded}
          isSymbolsIncluded={isSymbolsIncluded}
          handleSettingsToggles={handleSettingsToggles}
          handleGeneratePasswordClick={handleGeneratePasswordClick}
        ></StyledPasswordGeneratorBox>
      </Box>
    </ThemeProvider>
  );
};

export default App;
