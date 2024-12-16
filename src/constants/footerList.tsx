import { findUsLink, socialsLink } from "./links";

export const footerList = [
  {
    title: "Other links",
    list: [
      {
        title: "Buy",
        link: findUsLink.uniswap,
      },
      {
        title: "Chart",
        link: findUsLink.dextools,
      },
      {
        title: "Verify",
        link: findUsLink.etherscan,
      },
    ],
  },
  {
    title: "Support",
    list: [
      {
        title: "Bot",
        link: socialsLink.bot,
      },
      {
        title: "Whitepaper",
        link: socialsLink.whitepaper,
      },
      {
        title: "Contact Us",
        link: socialsLink.email,
      },
    ],
  },
  {
    title: "Products",
    list: [
      {
        title: "Shared CPU",
        link: "/",
      },
      {
        title: "Dedicated CPU",
        link: "/",
      },
      {
        title: "Bare Metal",
        link: "/",
      }
    ],
  },
];
