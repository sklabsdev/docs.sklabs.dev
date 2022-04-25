// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const scripts = [];

if (process.env.NODE_ENV === "production") {
  scripts.push("../js/hotjar.js");
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SKlabs",
  tagline: "Powerful integrations for your productivity",
  url: "https://docs.sklabs.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sklabs", // Usually your GitHub org/user name.
  projectName: "docs.sklabs.dev", // Usually your repo name.
  scripts,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/sklabsdev/docs.sklabs.dev/tree/master/docs/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-178035977-1",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "SKlabs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Tutorials",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/sklabsdev/docs.sklabs.dev",
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
                label: "Tutorials",
                to: "/",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy policy",
                href: "https://sklabs.dev/privacy-policy",
              },
              {
                label: "Terms of Service",
                href: "https://sklabs.dev/terms",
              },
            ],
          },
          {
            title: "LiveChat Apps",
            items: [
              {
                label: "Zoom for LiveChat",
                href: "https://www.livechat.com/marketplace/apps/zoom-for-livechat/",
              },
              {
                label: "Discord",
                href: "https://www.livechat.com/marketplace/apps/discord/",
              },
              {
                label: "Microsoft Teams",
                href: "https://www.livechat.com/marketplace/apps/microsoft-teams/",
              },
              {
                label: "Ping",
                href: "https://www.livechat.com/marketplace/apps/ping/",
              },
              {
                label: "GoToMeeting for LiveChat",
                href: "https://www.livechat.com/marketplace/apps/gotomeeting-for-livechat/",
              },
              {
                label: "GitHub for LiveChat",
                href: "https://www.livechat.com/marketplace/apps/github-for-livechat/",
              },
              {
                label: "Trello for LiveChat",
                href: "https://www.livechat.com/marketplace/apps/trello-for-livechat/",
              },
              {
                label: "PayPal",
                href: "https://www.livechat.com/marketplace/apps/paypal/",
              },
            ],
          },
          {
            title: "Intercom Apps",
            items: [
              {
                label: "Zoom Meetings",
                href: "https://www.intercom.com/app-store/?app_package_code=zoom-meetings",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SKlabs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
