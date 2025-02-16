import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Before you go",
      icon: "laptop-code",
      prefix: "intro/",
      link: "/intro.html",
      children: "structure",
    },
    {
      text: "Nature",
      icon: "laptop-code",
      prefix: "nature/",
      link: "/tag/nature/",
      children: "structure",
    },

  ],
});
