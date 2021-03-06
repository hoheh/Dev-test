module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    "no-extra-boolean-cast": 0,
    "comma-dangle": 0,
    // "max-len": ["error", { code: 100 }],
    "space-before-function-paren": 0,
    semi: ["error", "always"],
    "vue/html-self-closing": [
      "warning",
      { html: { void: "always", normal: "always", component: "always" } },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Selector"],
      },
    ],
  },
};
