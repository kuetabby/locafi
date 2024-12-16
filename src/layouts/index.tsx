"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import clsx from "clsx";
import { ArrowUpOutlined } from "@ant-design/icons";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { lato } from "@/utils/font";

import "./style.css";

interface Props extends PropsWithChildren {}

const BaseLayout: React.FC<Props> = ({ children }) => {
  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();

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

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Provider>
      <Navbar />
      <main className={clsx("base-main-container", lato.className)}>
        {children}

        {/* <div
          className={`${
            isScroll ? "fixed" : "hidden"
          } bottom-12 right-2 z-[999] animate-fadeInBase`}
        >
          <Button
            className="font-bold bg-primary text-white border-transparent hover:!border-transparen w-12 lg:w-16 h-12 lg:h-16 rounded-full"
            colorScheme="purple"
            size={"md"}
            onClick={scrollToTop}
          >
            <ArrowUpOutlined className="text-xl lg:text-3xl font-bold mt-2" />
          </Button>
        </div> */}
      </main>
      <Footer />
    </Provider>
  );
};

// const BaseMain: React.FC<Props> = ({ children }) => {
//   // const address = useAddress();

//   // useQuery(
//   //   [address],
//   //   async () => {
//   //     const request = await axios.get("http://localhost:5000/verify");
//   //     const response = await request;

//   //     console.log(response, "res");

//   //     return response;
//   //   },
//   //   {
//   //     enabled: !!address,
//   //   }
//   // );

//   return (
//     // <main className={clsx("base-main-container")}>
//     <main className={clsx("base-main-container", lato.className)}>
//       {children}
//     </main>
//   );
// };

export default BaseLayout;
