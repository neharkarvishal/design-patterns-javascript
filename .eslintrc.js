module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off",
    "global-require": "off",
    "no-unused-vars": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "import/no-dynamic-require": "off",
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1 }],
    "max-len": ["error", 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
    }],
  },
};
