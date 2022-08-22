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
    "space-before-function-paren": 0,
    semi: ["error", "always"],
    indent: [0, "always"],
    "vue/html-self-closing": [
      1,
      { html: { void: "always", normal: "always", component: "always" } },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Selector", "Notification"],
      },
    ],
  },
};
