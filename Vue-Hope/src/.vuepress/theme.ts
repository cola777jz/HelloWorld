import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: { /*作者信息配置*/
      name: "Mr.Cola",
      url: "https://github.com/cola777jz/HelloWorld",
      email: "cola0817jz@gmail.com"
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "cola777jz/HelloWorld", /*仓库信息配置*/

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

        /*英文下 默认页脚的配置*/
      footer: "Power by <a href=\"https://github.com/cola777jz/ygnn-vue/\" target=\"_blank\">Mr.Cola</a> | MIT Licensed, Copyright © 2023-present Mr.Cola",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

        /*中文下 默认页脚的配置*/
      footer: "Power by <a href=\"https://github.com/cola777jz/ygnn-vue/\" target=\"_blank\">Mr.Cola</a> | MIT Licensed, Copyright © 2023-present Mr.Cola",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
        /*加密页面密码的配置*/
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
        /*评论功能相关配置*/
      provider: "Giscus",
      repo: "cola777jz/HelloWorld",
      repoId: "R_kgDOKXihVQ",
      category: "Announcements",
      categoryId: "DIC_kwDOKXihVc4CZlJq",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
