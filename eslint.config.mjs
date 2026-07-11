import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

const config = [
  ...nextConfig,
  {
    rules: {
      ...prettierConfig.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
];

export default config;
