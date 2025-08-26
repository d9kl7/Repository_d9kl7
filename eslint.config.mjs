import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      js,
      jest
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules
    }
  }
]);
