import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// import Honeycomb from "@/assets/honeycomb.png";
import Solidproof from "@/assets/solidproof.png";
import Dextools from "@/assets/dextools.png";
import Dexscreener from "@/assets/dexscreener.png";
import Uniswap from "@/assets/uniswap.png";

import "../style.css";
import Link from "next/link";

interface Props {}

export const FindUs: React.FC<Props> = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsContentVisible(entry.isIntersecting);
    });

    observer.observe(contentRef.current as HTMLDivElement);
  }, []);

  return (
    <div
      ref={contentRef}
      className={`mt-10 ${isContentVisible && "animate-fadeInLame"}`}
    >
      <div className="relative text-center mx-auto text-2xl lg:text-3xl 2xl:text-4xl font-bold z-[999]">
        Find us on :
      </div>
      <div className={`relative why-card-container !mt-2`}>
        {/* <Image
          src={Honeycomb}
          alt="honeycomb"
          className="w-full h-full absolute top-0 bg-cover bg-no-repeat opacity-90 blur-[1px]"
        /> */}
        <div className="w-full flex flex-wrap justify-between items-center relative px-2">
          <Link
            href="https://app.uniswap.org/tokens/ethereum/0x67934Fa827df9348cd3e9A311EbB8fca6603AcF9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[22.5%] my-2 sm:my-0 h-16"
          >
            <Image
              src={Uniswap}
              alt="uniswap"
              className="object-contain w-full h-full"
            />
          </Link>
          <Link
            href="https://app.solidproof.io/projects/locafi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[22.5%] mb-2 sm:mb-0 h-16"
          >
            <Image
              src={Solidproof}
              alt="solidproof"
              className="object-contain w-full h-full"
            />
          </Link>
          <Image
            src={Dexscreener}
            alt="dextools"
            className="object-contain w-full sm:w-[22.5%] h-20"
          />
          <Image
            src={Dextools}
            alt="dextools"
            className="object-contain w-full sm:w-[22.5%] my-2 sm:my-0 h-[20vw] xs:h-[15vw] sm:h-full"
          />
          {/* <Image
            src={Dextools}
            alt="dextools"
            className="object-contain w-1/2 sm:w-1/4 h-14"
          /> */}
        </div>
      </div>
    </div>
  );
};
