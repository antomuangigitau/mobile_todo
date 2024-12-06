// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { parser: "flow" }],
  },
  ignorePatterns: ["/dist/*"],
};
