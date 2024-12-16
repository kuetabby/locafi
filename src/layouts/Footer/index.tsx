"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import BackgroundTheme from "@/assets/background-1.png";

import AppLogo from "@/assets/logo-app.png";
import TwitterLogo from "@/assets/logo-twitter.png";
// import DiscordLogo from "@/assets/logo-discord.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import MediumLogo from "@/assets/logo-medium.png";

import "./style.css";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }

  return (
    <footer
      className={clsx("app-footer bg-dark-primary")}
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(56,56,56,1) 33%, rgba(68,68,68,1) 66%, rgba(36,36,36,1) 100%)",
      // }}
    >
      {/* <Image
        src={BackgroundTheme}
        alt="theme"
        // className="w-full h-full absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
        className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat"
      /> */}
      <div className="app-footer-wrapper">
        {/* <div className="w-3/4 sm:w-full lg:w-11/12 2xl:w-4/5 flex flex-wrap items-center justify-between lg:justify-center m-auto">

          <div className="w-full lg:w-4/5 flex">
            <Link
              href="https://x.com/LocafiERC20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/3 flex justify-center items-center mx-auto hover:text-blue-500"
            >
              <Image
                src={TwitterLogo}
                alt="tw-logo"
                className="w-10 lg:w-12 h-10 lg:h-12"
              />
              <div className="hidden sm:block text-xs md:text-sm font-semibold ml-1 sm:ml-2">
                Twitter
              </div>
            </Link>
            <Link
              href="https://medium.com/@locafierc20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/3 flex justify-center items-center mx-auto hover:text-blue-500"
            >
              <Image
                src={MediumLogo}
                alt="dc-logo"
                className="w-10 lg:w-12 h-10 lg:h-12 !rounded-full"
              />
              <div className="hidden sm:block text-xs md:text-sm font-semibold ml-1 sm:ml-2">
                Medium
              </div>
            </Link>
            <Link
              href="https://t.me/LocafiERC20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/3 flex justify-center items-center mx-auto hover:text-blue-500"
            >
              <Image
                src={TelegramLogo}
                alt="tele-logo"
                className="w-10 lg:w-12 h-10 lg:h-12"
              />
              <div className="hidden sm:block text-xs md:text-sm font-semibold ml-1 sm:ml-2">
                Telegram
              </div>
            </Link>
          </div>
        </div> */}

        <div className="all-reserved">
          <div className="flex items-center my-2 text-white">
            <CopyrightOutlined style={{ fontSize: "0.75em" }} />
            <div className="ml-2 text-xs font-semibold">
              2024 <span className="lg:text-sm">TrenchAI</span>. All Right
              Reserved.{" "}
              {/* <Link
                href="mailto:"
                rel="noopener noreferrer"
                className="font-extrabold underline underline-offset-4 hover:text-blue-500"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
        {/* {width >= 640 ? (
        ) : (
          <div className="connect-mobile">
            <div className="mobile-wrapper">
              <div className="mr-2">
                <ConnectWallet />
              </div>
            </div>
          </div>
        )} */}
      </div>
    </footer>
  );
};

export default AppFooter;
