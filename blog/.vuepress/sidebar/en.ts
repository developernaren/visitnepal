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
      text: "Our Tour",
      icon: "laptop-code",
      prefix: "posts",
      link: "posts/our-time/tour.html",
      children: "structure",
    },

  ],
});
