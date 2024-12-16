import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import useHash from "@/hooks/useHashname";

import { getHash } from "@/utils/hash";

import "./style.css";
import { findUsLink, socialsLink } from "@/constants/links";

interface Props {
  containterClass: string;
}

const PageTabs: React.FC<Props> = ({ containterClass }) => {
  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();
  const isDappPath = pathname.toLocaleLowerCase().includes("dapp");

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    if (isDappPath) {
      return [
        {
          href: "/",
          pathname: `/`,
          name: "HOME",
        },
        {
          href: "/dapp/stake",
          pathname: `/dapp/stake`,
          name: "STAKING",
        },
        {
          href: "/dapp/scanner",
          pathname: `/dapp/scanner`,
          name: "SCANNER",
        },
        {
          href: "https://swap.locafi.network",
          pathname: `https://swap.locafi.network`,
          name: "SWAP",
        },
      ];
    }

    return [
      {
        href: "/",
        pathname: `/`,
        name: "HOME",
      },
      {
        href: findUsLink.raydium,
        pathname: findUsLink.raydium,
        name: "BUY",
      },
      {
        href: findUsLink.dexscreener,
        pathname: findUsLink.dexscreener,
        name: "CHART",
      },
    ];
  }, [isDappPath]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={clsx("w-full sm:w-52 justify-between", containterClass)}>
      {tabsList.map((item) => {
        const isActive = !!defaultHash
          ? hashname === item.pathname
          : !defaultHash && pathname === item.pathname;

        // const isActive = pathname === item.pathname;
        return (
          <Anchor
            key={item.name}
            href={item.href}
            className={clsx(
              // "text-white p-2 hover:text-secondary font-bold",
              // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
              isActive ? "nav-anchor-active" : "nav-anchor"
            )}
            style={{ transition: "250" }}
          >
            {item.name}
          </Anchor>
        );
      })}
    </div>
  );
};

export default PageTabs;
