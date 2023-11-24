import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { SwapRightOutlined } from "@ant-design/icons";

// import { useCopyText } from "@/hooks/useCopyText";

import "../style.css";

interface Props {}

const contractAddress = process.env.NEXT_PUBLIC_LOCAFI_CONTRACT_ADDRESS ?? "-";

export const About: React.FC<Props> = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isWhitepaperVisible, setIsWhitepaperVisible] = useState(false);

  // const [copyContent] = useCopyText();

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
        At the heart of Loca.Fi's vision is the belief that blockchain
        technology can empower individuals and businesses alike by providing
        them with secure, transparent, and efficient tools to navigate an
        increasingly digital world. By fostering a decentralized ecosystem,
        Locafi aims to redefine traditional paradigms and drive positive change
        across industry
      </div>

      <div ref={whitepaperRef} className="w-full text-center mt-10">
        <div className="mb-4 w-full">
          <div className="text-xl lg:text-2xl font-bold">
            CA : {contractAddress}
            {/* <CopyOutlined
              className="ml-2 cursor-pointer hover:text-secondary"
              onClick={() => copyContent(contractAddress)}
            /> */}
          </div>
        </div>
        <Link href="https://loca-fi.gitbook.io" target="_blank">
          <Button
            rightIcon={<SwapRightOutlined />}
            className={`whitepaper-btn ${
              isWhitepaperVisible && "animate-lightSpeedInLeftBase"
            }`}
          >
            Whitepaper
          </Button>
        </Link>
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
