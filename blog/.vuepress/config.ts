import { defineUserConfig } from "vuepress";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
