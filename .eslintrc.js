module.exports = {
  extends: ["plugin:sonarjs/recommended", "eslint:recommended"],
  plugins: ["sonarjs", "prettier"],
  rules: { "no-console": 1 },
  env: {
    jest: true,
    es6: true,
    node: true
  }
};
