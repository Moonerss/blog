// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

// docs/.vuepress/theme.ts
import themePlume from "vuepress-theme-plume";

// docs/.vuepress/notes.ts
import { definePlumeNotesConfig } from "vuepress-theme-plume";
var zhNotes = definePlumeNotesConfig({
  dir: "notes",
  link: "/",
  notes: [
    {
      dir: "NGS",
      link: "/NGS/",
      sidebar: [
        {
          text: "\u57FA\u7840\u5185\u5BB9",
          collapsed: false,
          icon: "carbon:idea",
          items: ["filetype", "concept", "genome", "gene_id", "tpm_fpkm_rpkm", "vcf", "epigenetics"]
        }
      ]
    },
    {
      dir: "R",
      link: "/R/",
      sidebar: [
        {
          text: "\u96F6\u661F\u6982\u5FF5",
          collapsed: true,
          icon: "carbon:idea",
          items: ["typeof", "r_object", "file_r", "apply"]
        },
        {
          text: "\u4F7F\u7528\u6848\u4F8B",
          collapsed: true,
          icon: "carbon:idea",
          items: ["r_stats", "trycatch", "library_require", "cut"]
        },
        {
          text: "tidyverse",
          collapsed: true,
          icon: "carbon:idea",
          dir: "/tidyverse/",
          items: ["readr", "tibble", "tidyr", "dplyr", "purrr", "stringr"]
        },
        {
          text: "ggplot2",
          collapsed: true,
          icon: "carbon:idea",
          dir: "/ggplot2/",
          items: ["ggplot_tips", "ggplot_gallery", "combine_ggplot2"]
        },
        {
          text: "R\u5305\u5F00\u53D1",
          collapsed: true,
          icon: "carbon:idea",
          dir: "/pkgs/",
          items: ["question", "S3"]
        },
        {
          text: "\u5176\u4ED6",
          collapsed: true,
          icon: "carbon:idea",
          items: ["r_format", "r_parallel"]
        }
      ]
    },
    {
      dir: "py",
      link: "/py/",
      sidebar: [
        {
          text: "Python",
          collapsed: false,
          icon: "carbon:idea",
          items: ["dataformat_py", "chara_py"]
        }
      ]
    },
    {
      dir: "Analysis/scRNA",
      link: "/scRNA/",
      sidebar: [
        "",
        {
          text: "\u6570\u636E\u9884\u5904\u7406",
          link: "/scRNA/",
          items: ["cellranger", "base", "quality_control"]
        }
      ]
    },
    {
      dir: "Analysis/ATACseq",
      link: "/ATACseq/",
      sidebar: [
        {
          icon: "grommet-icons:install",
          items: ["ATAC_seq"]
        }
      ]
    },
    {
      dir: "biology",
      link: "/biology/",
      sidebar: [
        {
          text: "basic",
          collapsed: false,
          icon: "carbon:idea",
          items: ["program_death"]
        }
      ]
    },
    {
      dir: "resource",
      link: "/resource/"
    }
  ]
});
var enNotes = definePlumeNotesConfig({
  dir: "en/notes",
  link: "/",
  notes: []
});

// docs/.vuepress/navbar.ts
var zhNavbar = [
  {
    text: "\u9996\u9875",
    link: "/",
    icon: "material-symbols:home-outline"
  },
  {
    text: "NGS",
    icon: "material-symbols:genetics",
    // link: '/guide/intro/',
    link: "/notes/NGS/filetype.md",
    activeMatch: "^/NGS/"
  },
  /***
  {
    text: 'workflow',
    icon: 'carbon:workflow-automation',
    link: '/notes/workflow/RNA.md',
    activeMatch: '^/workflow/'
  },
  ***/
  {
    text: "R",
    icon: "mdi:language-r",
    link: "/notes/R/",
    activeMatch: "^/R/"
  },
  {
    text: "Python",
    icon: "gravity-ui:logo-python",
    link: "/notes/py/chara_py.md",
    activeMatch: "^/py/"
  },
  {
    text: "Analysis",
    icon: "material-symbols:book-5-outline",
    items: [
      {
        text: "scRNA",
        link: "/scRNA/",
        icon: "carbon:watson-machine-learning"
      },
      {
        text: "ATAC-seq",
        link: "/ATACseq/",
        icon: "grommet-icons:install"
      }
    ]
  },
  {
    text: "biology",
    icon: "material-symbols:book-5-outline",
    link: "/notes/biology/",
    activeMatch: "^/biology/"
  },
  {
    text: "\u8D44\u6E90",
    icon: "material-symbols:book-5-outline",
    activeMatch: "^/resource/",
    items: [
      {
        text: "\u5B66\u4E60",
        link: "/bioinfo/",
        icon: "carbon:watson-machine-learning"
      }
    ]
  },
  {
    text: "Awesome",
    icon: "material-symbols:book-5-outline",
    activeMatch: "^/awesome/",
    items: [
      {
        text: "Command",
        link: "/awesome/command/",
        icon: "carbon:watson-machine-learning"
      },
      {
        text: "Tools",
        link: "/awesome/biotools/",
        icon: "carbon:watson-machine-learning"
      },
      {
        text: "R package",
        link: "/awesome/Rpkgs/",
        icon: "carbon:watson-machine-learning"
      },
      {
        text: "Plot",
        link: "/awesome/Plots/",
        icon: "carbon:watson-machine-learning"
      }
    ]
  },
  {
    text: "\u535A\u5BA2",
    link: "/blog/",
    icon: "material-symbols:article-outline",
    activeMatch: "^/(blog|article)/"
  }
];

// docs/.vuepress/theme.ts
var theme = themePlume({
  logo: "/avatar.jpeg",
  hostname: "https://jeason.netlify.app/",
  repo: "https://github.com/Moonerss/blog",
  docsDir: "docs",
  contributors: false,
  /***
  blog 页面的内容
  avatar: {
    name: 'Jeason',
    url: '/images/blogger-fav.png',
    description: '世间的美好总是不期而遇',
  },
  ***/
  social: [
    { icon: "github", link: "https://github.com/Moonerss" }
  ],
  editLinkText: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875",
  footer: { copyright: "Copyright \xA9 2024-present Jeason" },
  notes: zhNotes,
  navbar: zhNavbar
  /***
  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },
  ***/
});

// docs/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  // 请不要忘记设置默认语言
  lang: "zh-CN",
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
  bundler: viteBundler(),
  theme
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25vdGVzLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2ZpbGUvZ2l0aHViL2Jvb2tub3RlL0plYXNvbl9ub3RlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmaWxlXFxcXGdpdGh1YlxcXFxib29rbm90ZVxcXFxKZWFzb25fbm90ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2ZpbGUvZ2l0aHViL2Jvb2tub3RlL0plYXNvbl9ub3RlL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IHR5cGUgVXNlckNvbmZpZywgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xyXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcbi8vIGFkZCB0aGVtZSBjb25maWdcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lLnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgYmFzZTogJy8nLFxyXG4gIC8vIFx1OEJGN1x1NEUwRFx1ODk4MVx1NUZEOFx1OEJCMFx1OEJCRVx1N0Y2RVx1OUVEOFx1OEJBNFx1OEJFRFx1OEEwMFxyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgcGFnZVBhdHRlcm5zOiBbJyoqLyoubWQnLCAnISoqLyouc25pcHBldC5tZCcsICchLnZ1ZXByZXNzJywgJyFub2RlX21vZHVsZXMnXSxcclxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxyXG4gIHRoZW1lLFxyXG59KSBhcyBVc2VyQ29uZmlnIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9maWxlL2dpdGh1Yi9ib29rbm90ZS9KZWFzb25fbm90ZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZmlsZVxcXFxnaXRodWJcXFxcYm9va25vdGVcXFxcSmVhc29uX25vdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2ZpbGUvZ2l0aHViL2Jvb2tub3RlL0plYXNvbl9ub3RlL2RvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xyXG5pbXBvcnQgdGhlbWVQbHVtZSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSdcclxuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzJ1xyXG5pbXBvcnQgeyB6aE5vdGVzIH0gZnJvbSAnLi9ub3Rlcy50cydcclxuaW1wb3J0IHsgemhOYXZiYXIgfSBmcm9tICcuL25hdmJhci50cydcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWUgPSB0aGVtZVBsdW1lKHtcclxuXHJcbiAgbG9nbzogJy9hdmF0YXIuanBlZycsXHJcbiAgaG9zdG5hbWU6ICdodHRwczovL2plYXNvbi5uZXRsaWZ5LmFwcC8nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTW9vbmVyc3MvYmxvZycsXHJcbiAgZG9jc0RpcjogJ2RvY3MnLFxyXG4gIGNvbnRyaWJ1dG9yczogZmFsc2UsXHJcbiAgLyoqKlxyXG4gIGJsb2cgXHU5ODc1XHU5NzYyXHU3Njg0XHU1MTg1XHU1QkI5XHJcbiAgYXZhdGFyOiB7XHJcbiAgICBuYW1lOiAnSmVhc29uJyxcclxuICAgIHVybDogJy9pbWFnZXMvYmxvZ2dlci1mYXYucG5nJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU0RTE2XHU5NUY0XHU3Njg0XHU3RjhFXHU1OTdEXHU2MDNCXHU2NjJGXHU0RTBEXHU2NzFGXHU4MDBDXHU5MDQ3JyxcclxuICB9LFxyXG4gICoqKi9cclxuICBzb2NpYWw6IFtcclxuICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vTW9vbmVyc3MnIH0sXHJcbiAgXSxcclxuXHJcbiAgZWRpdExpbmtUZXh0OiAnXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzUnLFxyXG4gIGZvb3RlcjogeyBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQtcHJlc2VudCBKZWFzb24nIH0sXHJcblxyXG4gIG5vdGVzOiB6aE5vdGVzLFxyXG4gIG5hdmJhcjogemhOYXZiYXIsXHJcbiAgLyoqKlxyXG4gIGxvY2FsZXM6IHtcclxuICAgICcvJzoge1xyXG4gICAgICBub3RlczogemhOb3RlcyxcclxuICAgICAgbmF2YmFyOiB6aE5hdmJhcixcclxuICAgIH0sXHJcbiAgICAnL2VuLyc6IHtcclxuICAgICAgbm90ZXM6IGVuTm90ZXMsXHJcbiAgICAgIG5hdmJhcjogZW5OYXZiYXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgKioqL1xyXG59KSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovZmlsZS9naXRodWIvYm9va25vdGUvSmVhc29uX25vdGUvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGZpbGVcXFxcZ2l0aHViXFxcXGJvb2tub3RlXFxcXEplYXNvbl9ub3RlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXG5vdGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9maWxlL2dpdGh1Yi9ib29rbm90ZS9KZWFzb25fbm90ZS9kb2NzLy52dWVwcmVzcy9ub3Rlcy50c1wiO2ltcG9ydCB7IGRlZmluZVBsdW1lTm90ZXNDb25maWcgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSdcclxuXHJcbmV4cG9ydCBjb25zdCB6aE5vdGVzID0gZGVmaW5lUGx1bWVOb3Rlc0NvbmZpZyh7XHJcbiAgZGlyOiAnbm90ZXMnLFxyXG4gIGxpbms6ICcvJyxcclxuICBub3RlczogW1xyXG4gICAge1xyXG4gICAgICBkaXI6ICdOR1MnLFxyXG4gICAgICBsaW5rOiAnL05HUy8nLFxyXG4gICAgICBzaWRlYmFyOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1NTE4NVx1NUJCOScsXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGl0ZW1zOiBbJ2ZpbGV0eXBlJywgJ2NvbmNlcHQnLCAnZ2Vub21lJywgJ2dlbmVfaWQnLCAndHBtX2Zwa21fcnBrbScsICd2Y2YnLCAnZXBpZ2VuZXRpY3MnXSxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcjogJ1InLFxyXG4gICAgICBsaW5rOiAnL1IvJyxcclxuICAgICAgc2lkZWJhcjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTk2RjZcdTY2MUZcdTY5ODJcdTVGRjUnLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGl0ZW1zOiBbJ3R5cGVvZicsICdyX29iamVjdCcsICdmaWxlX3InLCAnYXBwbHknXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTRGN0ZcdTc1MjhcdTY4NDhcdTRGOEInLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGl0ZW1zOiBbJ3Jfc3RhdHMnLCAndHJ5Y2F0Y2gnLCAnbGlicmFyeV9yZXF1aXJlJywgJ2N1dCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ3RpZHl2ZXJzZScsXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICBpY29uOiAnY2FyYm9uOmlkZWEnLFxyXG4gICAgICAgICAgZGlyOiAnL3RpZHl2ZXJzZS8nLFxyXG4gICAgICAgICAgaXRlbXM6IFsncmVhZHInLCAndGliYmxlJywgJ3RpZHlyJywgJ2RwbHlyJywgJ3B1cnJyJywgJ3N0cmluZ3InXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ2dncGxvdDInLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGRpcjogJy9nZ3Bsb3QyLycsXHJcbiAgICAgICAgICBpdGVtczogWydnZ3Bsb3RfdGlwcycsICdnZ3Bsb3RfZ2FsbGVyeScsICdjb21iaW5lX2dncGxvdDInXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1JcdTUzMDVcdTVGMDBcdTUzRDEnLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGRpcjogJy9wa2dzLycsXHJcbiAgICAgICAgICBpdGVtczogWydxdWVzdGlvbicsICdTMyddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcclxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgIGljb246ICdjYXJib246aWRlYScsXHJcbiAgICAgICAgICBpdGVtczogWydyX2Zvcm1hdCcsICdyX3BhcmFsbGVsJ10sXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXI6ICdweScsXHJcbiAgICAgIGxpbms6ICcvcHkvJyxcclxuICAgICAgc2lkZWJhcjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdQeXRob24nLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgIGljb246ICdjYXJib246aWRlYScsXHJcbiAgICAgICAgICBpdGVtczogWydkYXRhZm9ybWF0X3B5JywgJ2NoYXJhX3B5J10sXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXI6ICdBbmFseXNpcy9zY1JOQScsXHJcbiAgICAgIGxpbms6ICcvc2NSTkEvJyxcclxuICAgICAgc2lkZWJhcjogW1xyXG4gICAgICAgICcnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTk4ODRcdTU5MDRcdTc0MDYnLFxyXG4gICAgICAgICAgbGluazogJy9zY1JOQS8nLFxyXG4gICAgICAgICAgaXRlbXM6IFsnY2VsbHJhbmdlcicsICdiYXNlJywgJ3F1YWxpdHlfY29udHJvbCddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXI6ICdBbmFseXNpcy9BVEFDc2VxJyxcclxuICAgICAgbGluazogJy9BVEFDc2VxLycsXHJcbiAgICAgIHNpZGViYXI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uOiAnZ3JvbW1ldC1pY29uczppbnN0YWxsJyxcclxuICAgICAgICAgIGl0ZW1zOiBbJ0FUQUNfc2VxJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcjogJ2Jpb2xvZ3knLFxyXG4gICAgICBsaW5rOiAnL2Jpb2xvZ3kvJyxcclxuICAgICAgc2lkZWJhcjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdiYXNpYycsXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgaWNvbjogJ2NhcmJvbjppZGVhJyxcclxuICAgICAgICAgIGl0ZW1zOiBbJ3Byb2dyYW1fZGVhdGgnXSxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcjogJ3Jlc291cmNlJyxcclxuICAgICAgbGluazogJy9yZXNvdXJjZS8nXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGVuTm90ZXMgPSBkZWZpbmVQbHVtZU5vdGVzQ29uZmlnKHtcclxuICBkaXI6ICdlbi9ub3RlcycsXHJcbiAgbGluazogJy8nLFxyXG4gIG5vdGVzOiBbXSxcclxufSkiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2ZpbGUvZ2l0aHViL2Jvb2tub3RlL0plYXNvbl9ub3RlL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxmaWxlXFxcXGdpdGh1YlxcXFxib29rbm90ZVxcXFxKZWFzb25fbm90ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2ZpbGUvZ2l0aHViL2Jvb2tub3RlL0plYXNvbl9ub3RlL2RvY3MvLnZ1ZXByZXNzL25hdmJhci50c1wiOy8vIHNldCB0aGUgdG9wIGJhclxyXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnXHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXHJcblxyXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBbXHJcbiAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JyxcclxuICAgIGxpbms6ICcvJyxcclxuICAgIGljb246ICdtYXRlcmlhbC1zeW1ib2xzOmhvbWUtb3V0bGluZSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdOR1MnLFxyXG4gICAgaWNvbjogJ21hdGVyaWFsLXN5bWJvbHM6Z2VuZXRpY3MnLFxyXG4gICAgLy8gbGluazogJy9ndWlkZS9pbnRyby8nLFxyXG4gICAgbGluazogJy9ub3Rlcy9OR1MvZmlsZXR5cGUubWQnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICdeL05HUy8nLFxyXG4gIH0sXHJcbiAgLyoqKlxyXG4gIHtcclxuICAgIHRleHQ6ICd3b3JrZmxvdycsXHJcbiAgICBpY29uOiAnY2FyYm9uOndvcmtmbG93LWF1dG9tYXRpb24nLFxyXG4gICAgbGluazogJy9ub3Rlcy93b3JrZmxvdy9STkEubWQnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICdeL3dvcmtmbG93LydcclxuICB9LFxyXG4gICoqKi9cclxuICB7XHJcbiAgICB0ZXh0OiAnUicsXHJcbiAgICBpY29uOiAnbWRpOmxhbmd1YWdlLXInLFxyXG4gICAgbGluazogJy9ub3Rlcy9SLycsXHJcbiAgICBhY3RpdmVNYXRjaDogJ14vUi8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnUHl0aG9uJyxcclxuICAgIGljb246ICdncmF2aXR5LXVpOmxvZ28tcHl0aG9uJyxcclxuICAgIGxpbms6ICcvbm90ZXMvcHkvY2hhcmFfcHkubWQnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICdeL3B5LydcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdBbmFseXNpcycsXHJcbiAgICBpY29uOiAnbWF0ZXJpYWwtc3ltYm9sczpib29rLTUtb3V0bGluZScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ3NjUk5BJyxcclxuICAgICAgICBsaW5rOiAnL3NjUk5BLycsXHJcbiAgICAgICAgaWNvbjogJ2NhcmJvbjp3YXRzb24tbWFjaGluZS1sZWFybmluZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdBVEFDLXNlcScsXHJcbiAgICAgICAgbGluazogJy9BVEFDc2VxLycsXHJcbiAgICAgICAgaWNvbjogJ2dyb21tZXQtaWNvbnM6aW5zdGFsbCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ2Jpb2xvZ3knLFxyXG4gICAgaWNvbjogJ21hdGVyaWFsLXN5bWJvbHM6Ym9vay01LW91dGxpbmUnLFxyXG4gICAgbGluazogJy9ub3Rlcy9iaW9sb2d5LycsXHJcbiAgICBhY3RpdmVNYXRjaDogJ14vYmlvbG9neS8nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU4RDQ0XHU2RTkwJyxcclxuICAgIGljb246ICdtYXRlcmlhbC1zeW1ib2xzOmJvb2stNS1vdXRsaW5lJyxcclxuICAgIGFjdGl2ZU1hdGNoOiAnXi9yZXNvdXJjZS8nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjAnLFxyXG4gICAgICAgIGxpbms6ICcvYmlvaW5mby8nLFxyXG4gICAgICAgIGljb246ICdjYXJib246d2F0c29uLW1hY2hpbmUtbGVhcm5pbmcnXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnQXdlc29tZScsXHJcbiAgICBpY29uOiAnbWF0ZXJpYWwtc3ltYm9sczpib29rLTUtb3V0bGluZScsXHJcbiAgICBhY3RpdmVNYXRjaDogJ14vYXdlc29tZS8nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdDb21tYW5kJyxcclxuICAgICAgICBsaW5rOiAnL2F3ZXNvbWUvY29tbWFuZC8nLFxyXG4gICAgICAgIGljb246ICdjYXJib246d2F0c29uLW1hY2hpbmUtbGVhcm5pbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnVG9vbHMnLFxyXG4gICAgICAgIGxpbms6ICcvYXdlc29tZS9iaW90b29scy8nLFxyXG4gICAgICAgIGljb246ICdjYXJib246d2F0c29uLW1hY2hpbmUtbGVhcm5pbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnUiBwYWNrYWdlJyxcclxuICAgICAgICBsaW5rOiAnL2F3ZXNvbWUvUnBrZ3MvJyxcclxuICAgICAgICBpY29uOiAnY2FyYm9uOndhdHNvbi1tYWNoaW5lLWxlYXJuaW5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1Bsb3QnLFxyXG4gICAgICAgIGxpbms6ICcvYXdlc29tZS9QbG90cy8nLFxyXG4gICAgICAgIGljb246ICdjYXJib246d2F0c29uLW1hY2hpbmUtbGVhcm5pbmcnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTUzNUFcdTVCQTInLFxyXG4gICAgbGluazogJy9ibG9nLycsXHJcbiAgICBpY29uOiAnbWF0ZXJpYWwtc3ltYm9sczphcnRpY2xlLW91dGxpbmUnLFxyXG4gICAgYWN0aXZlTWF0Y2g6ICdeLyhibG9nfGFydGljbGUpLycsXHJcbiAgfSxcclxuXSBhcyBOYXZJdGVtW11cclxuXHJcbmV4cG9ydCBjb25zdCBlbk5hdmJhciA9IFtcclxuXSBhcyBOYXZJdGVtW10iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNVLFNBQTBCLHdCQUF3QjtBQUN4WCxTQUFTLG1CQUFtQjs7O0FDQTVCLE9BQU8sZ0JBQWdCOzs7QUNENlMsU0FBUyw4QkFBOEI7QUFFcFcsSUFBTSxVQUFVLHVCQUF1QjtBQUFBLEVBQzVDLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLFlBQVksV0FBVyxVQUFVLFdBQVcsaUJBQWlCLE9BQU8sYUFBYTtBQUFBLFFBQzNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLFVBQVUsWUFBWSxVQUFVLE9BQU87QUFBQSxRQUNqRDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLE9BQU8sQ0FBQyxXQUFXLFlBQVksbUJBQW1CLEtBQUs7QUFBQSxRQUN6RDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLEtBQUs7QUFBQSxVQUNMLE9BQU8sQ0FBQyxTQUFTLFVBQVUsU0FBUyxTQUFTLFNBQVMsU0FBUztBQUFBLFFBQ2pFO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFVBQ0wsT0FBTyxDQUFDLGVBQWUsa0JBQWtCLGlCQUFpQjtBQUFBLFFBQzVEO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFVBQ0wsT0FBTyxDQUFDLFlBQVksSUFBSTtBQUFBLFFBQzFCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLFlBQVksWUFBWTtBQUFBLFFBQ2xDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLGlCQUFpQixVQUFVO0FBQUEsUUFDckM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLGNBQWMsUUFBUSxpQkFBaUI7QUFBQSxRQUNqRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU8sQ0FBQyxVQUFVO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixPQUFPLENBQUMsZUFBZTtBQUFBLFFBQ3pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBRU0sSUFBTSxVQUFVLHVCQUF1QjtBQUFBLEVBQzVDLEtBQUs7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBQztBQUNWLENBQUM7OztBQ3BITSxJQUFNLFdBQVc7QUFBQSxFQUN0QjtBQUFBLElBQUUsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxFQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLEVBQ2Y7QUFDRjs7O0FGakdPLElBQU0sUUFBZSxXQUFXO0FBQUEsRUFFckMsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNkLFFBQVE7QUFBQSxJQUNOLEVBQUUsTUFBTSxVQUFVLE1BQU0sOEJBQThCO0FBQUEsRUFDeEQ7QUFBQSxFQUVBLGNBQWM7QUFBQSxFQUNkLFFBQVEsRUFBRSxXQUFXLHFDQUFrQztBQUFBLEVBRXZELE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhVixDQUFDOzs7QURyQ0QsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUE7QUFBQSxFQUVOLE1BQU07QUFBQSxFQUNOLGNBQWMsQ0FBQyxXQUFXLG9CQUFvQixjQUFjLGVBQWU7QUFBQSxFQUMzRSxTQUFTLFlBQVk7QUFBQSxFQUNyQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
