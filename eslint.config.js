import eslintPluginAstro from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";
export default [
  // add more generic rule sets here, such as:
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro"],
    processor: "astro/client-side-ts",
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error",
    },
  },
  oxlint.configs["flat/recommended"],
];
