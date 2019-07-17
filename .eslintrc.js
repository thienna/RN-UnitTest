module.exports = {
  root: true,
  extends: '@react-native-community',
  "rules": {
    // enable additional rules
    "quotes": ["error", "single"],
    "prettier/prettier": ["off", {
      "singleQuote": true,
      "trailingComma": "all",
    }]
  },
};
