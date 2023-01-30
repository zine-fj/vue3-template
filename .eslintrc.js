module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@babel/eslint-parser",
  },
  plugins: ["prettier", "@babel", "simple-import-sort"],
  rules: {
    "no-unused-vars": 0,
    "no-empty": ["off"],
    "vue/no-v-model-argument": "off",
    "vue/no-mutating-props": "off",
    "vue/valid-v-for": "off",
    "vue/multi-word-component-names": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
