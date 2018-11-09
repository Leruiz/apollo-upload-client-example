module.exports = {
  root: true,
  parserOptions: {"parser": "babel-eslint"},
  env: {
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:vue/strongly-recommended'],
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "quotes": [2, "single", { "avoidEscape": true }],
  },
  globals: {
    consola:false
  }
};
