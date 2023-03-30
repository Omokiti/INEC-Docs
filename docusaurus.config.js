// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Independent National Electoral Commission(INEC) Documentation",
  tagline: "All about INEC",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Emamuzo Omokiti", // Usually your GitHub org/user name.
  projectName: "INEC-Docs", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Omokiti/INEC-Docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Omokiti/INEC-Docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "INEC Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/inec_logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/api", label: "API", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Omokiti",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/tutorial",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "My Blog",
                href: "https://emaomokiti.hashnode.dev",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/emamuzoomokiti",
              }
             
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Omokiti",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with love using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
