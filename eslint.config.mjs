import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default tseslint.config(
  [...compat.extends(
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    ""
), {
    plugins: {
        prettier,
    },
    languageOptions: {
        globals: {
            React: "readonly",
            JSX: true,
        },
    },
}],
  tseslint.configs.recommended,
  {  rules: {
    "linebreak-style": ["warn", "unix"],
    quotes: ["off", "single"],
    semi: ["off", "always"],
    "prettier/prettier": 0,
    "react-hooks/rules-of-hooks": 0,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-empty-pattern": "off",

    "@typescript-eslint/no-unused-vars": ["warn", {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
    }],
},}
);

