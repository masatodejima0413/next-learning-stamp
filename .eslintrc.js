module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-blvd/react",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "max-len": [
      "error",
      {
        code: 140,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "import/order": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          { char: ">", alternatives: ["&gt;"] },
          { char: "}", alternatives: ["&#125;"] },
        ],
      },
    ],
  },
};
