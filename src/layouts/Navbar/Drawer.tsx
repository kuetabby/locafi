import { useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { ConnectWallet } from "@thirdweb-dev/react";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

// import AppLogoTransparent from "@/assets/logo-transparent.png";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

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

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  if (!isMounted) {
    return null;
  }

  return (
    <Drawer
      size={"xs"}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className="bg-dark-main text-3xl">
          <span className="navbar-title">Loca.Fi</span>
        </DrawerHeader>

        <DrawerBody className="bg-dark-main">
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>
        <DrawerFooter className="bg-dark-main">
          <Button className="tw-connect-wallet w-full" isDisabled>
            Launch dApp
          </Button>

          {/* <ConnectWallet
            className="!w-full"
            hideTestnetFaucet
            btnTitle="Connect"
            modalTitleIconUrl={AppLogoTransparent.src}
          /> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
