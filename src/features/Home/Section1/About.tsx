import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { CopyOutlined, SwapRightOutlined } from "@ant-design/icons";

import { useCopyText } from "@/hooks/useCopyText";

import { contractAddress, socialsLink } from "@/constants/links";
import { TeleIcon, TwitterIcon } from "@/utils/Icon/socials";

import "../style.css";

interface Props {}

export const About: React.FC<Props> = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isWhitepaperVisible, setIsWhitepaperVisible] = useState(false);

  const [copyContent] = useCopyText();

  const visionRef = useRef<HTMLDivElement | null>(null);
  const whitepaperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisionVisible(entry.isIntersecting);
    });

    observer.observe(visionRef.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWhitepaperVisible(entry.isIntersecting);
    });

    observer.observe(whitepaperRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="w-full h-full">
      <div id="about" className="h-20 lg:h-24" />
      <h1
        ref={visionRef}
        className={`vision-title ${
          isVisionVisible && "animate-slideInTopFast"
        }`}
      >
        Our Vision
      </h1>

      <div className="w-full sm:w-4/5 xl:w-2/3 text-lg xs:text-xl sm:text-2xl text-center font-bold mx-auto mt-3">
        At Trench AI, our vision is to transform content creation and
        communication with the power of advanced AI. We strive to make
        creativity effortless and accessible, empowering users to produce
        engaging multimedia content seamlessly.
        {/* Loca.Fi is dedicated not only
        to reshaping industries but also safeguarding user confidentiality,
        creating a future where technology and individual data security coexist
        harmoniously. */}
      </div>

      <div ref={whitepaperRef} className="w-full text-center mt-10">
        <div className="mb-4 w-full">
          <div className="text-xl lg:text-2xl font-bold">
            CA : {contractAddress}
            <CopyOutlined
              className="ml-2 cursor-pointer hover:text-secondary"
              onClick={() => copyContent(contractAddress)}
            />
          </div>
        </div>

        <div className="w-full mx-auto justify-center flex space-x-3 mt-10">
          <a
            href={socialsLink.telegram}
            className="bg-vibrant-purple p-2 rounded-full shadow hover:shadow-md transition"
          >
            <TeleIcon className="fill-white" style={{ fontSize: "1.5em" }} />
          </a>
          <a
            href={socialsLink.twitter}
            className="bg-vibrant-purple p-2 rounded-full shadow hover:shadow-md transition"
          >
            <TwitterIcon className="fill-white" style={{ fontSize: "1.4em" }} />
          </a>
        </div>
        {/* <Link href="https://loca-fi.gitbook.io" target="_blank">
          <Button
            rightIcon={<SwapRightOutlined />}
            className={`whitepaper-btn ${
              isWhitepaperVisible && "animate-lightSpeedInLeftBase"
            }`}
          >
            Whitepaper
          </Button>
        </Link> */}
        {/* <Button
                ref={whitepaperRef}
                className={`whitepaper-btn ${
                  isWhitepaperVisible && "animate-lightSpeedInLeftBase"
                }`}
              >
                Buy On Uniswap
              </Button> */}
      </div>
    </div>
  );
};
