import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import useHash from "@/hooks/useHashname";

import { getHash } from "@/utils/hash";

import "./style.css";

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
      ];
    }

    return [
      {
        href: "/",
        pathname: `/`,
        name: "HOME",
      },
      {
        href: "#about",
        pathname: `#about`,
        name: "ABOUT",
      },
      {
        href: "#why",
        pathname: `#why`,
        name: "WHY US",
      },
      {
        href: "#tokenomic",
        pathname: `#tokenomic`,
        name: "TOKENOMIC",
      },
    ];
  }, [isDappPath]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        isDappPath
          ? "w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-2/12 justify-between"
          : "w-full sm:w-4/5 lg:w-3/5 xl:w-1/2 justify-between",
        containterClass
      )}
    >
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
