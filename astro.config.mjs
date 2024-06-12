import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import Icons from "unplugin-icons/vite";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [
      Icons({ jsx: "react", compiler: "jsx", autoInstall: true }),
      Icons({ compiler: "astro", autoInstall: true }),
    ],
  },
});
