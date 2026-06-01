import js from "@eslint/js";

const eslintConfig = [
  {
    ...js.configs.recommended,
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {},
  },
];

export default eslintConfig;
