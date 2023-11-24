import React from "react";
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

  const defaultHash = getHash();

  const tabsList = [
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
    // {
    //   href: "/roadmap",
    //   pathname: `/roadmap`,
    //   name: "ROADMAP",
    // },
    // {
    //   href: "/battle",
    //   pathname: `/battle`,
    //   name: "Battle",
    // },
    // {
    //   href: "/inventory",
    //   pathname: `/inventory`,
    //   name: "Inventory",
    // },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "w-full md:w-4/5 lg:w-3/5 xl:w-1/2 justify-between",
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
      {/* <Menu placement="bottom">
        <MenuButton
          as={Button}
          variant={"unstyled"}
          className="text-white p-2 hover:text-secondary font-bold"
          style={{ transition: "250" }}
        >
          Market
        </MenuButton>
        <MenuList className="bg-dark-secondary text-white py-1">
          <MenuItem
            as={Link}
            href="/marketplace"
            className={clsx(
              "bg-dark-secondary hover:bg-secondary",
              pathname === "/marketplace" && "!text-primary"
            )}
          >
            Marketplace
          </MenuItem>
          <MenuItem
            as={Link}
            href="/shop"
            className={clsx(
              "bg-dark-secondary hover:bg-secondary",
              pathname === "/shop" && "!text-primary"
            )}
          >
            Shop
          </MenuItem>
        </MenuList>
      </Menu> */}
    </div>
  );
};

export default PageTabs;
