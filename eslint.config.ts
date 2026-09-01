import { globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import importX from "eslint-plugin-import-x";

import newline from "./src/index.ts";

export default [
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  stylistic.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import-x": importX,
      "@laruiss/newline": newline,
    },
    rules: {
      curly: ["error", "all"],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "none",
            requireLast: false,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
        },
      ],
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import-x/order": [
        "error",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@sts-solvers/front-lib/styles",
              group: "object",
              position: "after",
            },
            {
              pattern: "./**/*.css",
              group: "object",
              position: "after",
            },
            {
              pattern: "@/**/*.css",
              group: "object",
              position: "after",
            },
            {
              pattern: "**/*.css",
              group: "object",
            },
            {
              pattern: "@/utils/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "@/composables/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**/*.vue",
              group: "index",
              position: "after",
            },
            {
              pattern: "../**/*.vue",
              group: "index",
              position: "after",
            },
            {
              pattern: "@/**/*.vue",
              group: "index",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "type"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/spaced-comment": [
        "error",
        "always",
        {
          markers: ["#region", "#endregion", "/"],
        },
      ],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            "?": "before",
            ":": "before",
            "|": "before",
            "&": "before",
          },
        },
      ],
      "@stylistic/max-statements-per-line": "error",
      "@stylistic/space-before-function-paren": [
        "error",
        {
          named: "always",
          anonymous: "always",
          asyncArrow: "always",
        },
      ],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/object-curly-newline": [
        "error",
        {
          multiline: true,
          minProperties: 2,
          consistent: true,
        },
      ],
      "@stylistic/object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
      "@stylistic/array-bracket-newline": [
        "error",
        {
          multiline: true,
          minItems: 2,
        },
      ],
      "@stylistic/array-element-newline": [
        "error",
        {
          minItems: 2,
        },
      ],
      "@stylistic/function-paren-newline": ["error", "multiline"],
      "@stylistic/function-call-argument-newline": ["error", "always"],
      "@laruiss/newline/function-declaration-argument-newline": ["error", "always"],
      "@laruiss/newline/import-specifier-newline": ["error", "always"],
      "@laruiss/newline/object-pattern-property-newline": ["error", "always"],
    },
  },
];
