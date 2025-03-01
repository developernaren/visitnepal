import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Visit Nepal 2025",
      description: "Visit Nepal 2025",
    }
  },
  theme,
  alias: {
    // Here you can direct aliases to your own components
    // For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components
    "@theme-hope/modules/info/components/AuthorInfo": path.resolve(
        __dirname,
        "./components/Empty.vue",
    ),
    "@theme-hope/modules/info/components/ReadingTimeInfo": path.resolve(
        __dirname,
        "./components/Empty.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
