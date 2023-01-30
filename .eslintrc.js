module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@babel/eslint-parser",
  },
  plugins: ["prettier", "@babel", "simple-import-sort"],
  rules: {},
};
