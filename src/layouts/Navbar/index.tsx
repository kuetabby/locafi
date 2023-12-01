"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { ConnectWallet } from "@thirdweb-dev/react";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";
import { MenuOutlined } from "@ant-design/icons";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { lato } from "@/utils/font";

import AppLogo from "@/assets/logo-app.png";
// import AppLogoTransparent from "@/assets/logo-transparent.png";

import "./style.css";

interface Props {}
// linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)
const Navbar: React.FC<Props> = () => {
  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  const [isEqual640] = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (isEqual640) {
      onCloseDrawer();
    }
  }, [isEqual640]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  return (
    <div className={clsx("navbar-container", lato.className)}>
      <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
        <div className="w-1/4 sm:w-[70%] flex items-center">
          {/* <div className="text-xl font-extrabold">LOCA.FI</div> */}
          <Link href="/" className={`logo-container text-white`}>
            <Image
              src={AppLogo}
              alt="mystic-logo"
              className="w-14 lg:w-16 h-14 lg:h-16 rounded-full"
            />
          </Link>
          <PageTabs containterClass="hidden sm:flex ml-2" />
        </div>
        <div className={clsx("!hidden sm:!flex justify-end w-1/5 md:w-1/3")}>
          <Button className="tw-connect-wallet w-auto" isDisabled>
            Launch dApp
          </Button>
          {/* <ConnectWallet
            hideTestnetFaucet
            btnTitle="Connect"
            modalTitleIconUrl={AppLogoTransparent.src}
          /> */}
        </div>

        {/* small devices */}
        <div className="sm:hidden w-1/2 text-center text-3xl font-extrabold">
          Loca.Fi
          {/* <span className="text-white">Loca.Fi</span> */}
          {/* <span className="navbar-title">Loca.Fi</span> */}
        </div>
        <div className="sm:hidden w-1/4 text-right animate-fadeInBasic">
          <Button
            className="bg-secondary hover:bg-secondary active:bg-secondary focus:bg-secondary"
            onClick={onOpenDrawer}
          >
            <MenuOutlined
              className="font-extrabold text-white"
              style={{ fontSize: "1.5em" }}
            />
          </Button>
        </div>
      </div>
      <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
    </div>
  );
};

export default Navbar;
