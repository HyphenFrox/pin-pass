// MIN + Math.floor(Math.random() * (MAX + 1))

const generateRandomUpperCaseLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * (90 - 65 + 1)));
};

const generateRandomLowerCaseLetter = () => {
  return String.fromCharCode(97 + Math.floor(Math.random() * (122 - 97 + 1)));
};

const generateRandomNumber = () => {
  return String.fromCharCode(48 + Math.floor(Math.random() * (57 - 48 + 1)));
};

const generateRandomSymbolFromNameSpace = () => {
  const namespace = ["!", "@", "#", "$", "%", "^", "&", "*"];
  return namespace[
    0 + Math.floor(Math.random() * (namespace.length - 1 - 0 + 1))
  ];
};

const generatePassword = (args) => {
  const {
    passwordLength,
    isUppercaseIncluded,
    isLowercaseIncluded,
    isNumbersIncluded,
    isSymbolsIncluded,
  } = args;

  // uppercase 65 to 90
  // lowercase 97 to 122
  // numbers 48 to 57
  // symbols 33, 35, 36, 37, 42, 64, 94

  const functions = [
    { setting: isUppercaseIncluded, function: generateRandomUpperCaseLetter },
    { setting: isLowercaseIncluded, function: generateRandomLowerCaseLetter },
    { setting: isNumbersIncluded, function: generateRandomNumber },
    { setting: isSymbolsIncluded, function: generateRandomSymbolFromNameSpace },
  ];

  const choseRandomFunction = () => {
    const chosenFunction =
      functions[0 + Math.floor(Math.random() * (functions.length - 1 - 0 + 1))];

    if (chosenFunction.setting) {
      return chosenFunction.function;
    }
    return choseRandomFunction();
  };

  let password = "";

  for (let i = 1; i <= passwordLength; ++i) {
    password = password.concat(choseRandomFunction()());
  }

  return password;
};

export default generatePassword;
