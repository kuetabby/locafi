import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { List, ListItem } from "@chakra-ui/react";

import Background4 from "@/assets/background-4.png";
import TokenDistribution from "@/assets/tokenomic.png";

import "./style.css";

interface Props {}

export const Tokenomic: React.FC<Props> = () => {
  const [isTokenImgVisible, setIsTokenImgVisible] = useState(false);

  const router = useRouter();

  const tokenImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsTokenImgVisible(entry.isIntersecting);
        // if (entry.isIntersecting) {
        //   router.push("#tokenomic");
        // }
      },
      { threshold: 1 }
    );

    observer.observe(tokenImageRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="w-full h-full relative z-[10] py-8 px-4 text-white">
      <div id="tokenomic" className="h-20 sm:h-16 xl:h-20" />
      <div ref={tokenImageRef} className="w-full h-full">
        <Image
          src={Background4}
          alt="background-4"
          //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
          className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat brightness-[0.65]"
        />

        <div className="relative">
          <h1 className="sm:hidden text-center text-3xl xs:text-5xl sm:text-7xl font-extrabold px-0 sm:px-20 animate-slideInRightBasic">
            <span className="text-secondary sm:ml-2">Tokenomic</span>
            {/* <span className="locafi-title ml-2">Loca.Fi</span> */}
          </h1>
          <div className="w-full xl:w-11/12 flex flex-wrap justify-between items-stretch mx-auto mt-3">
            <div
              className={`w-full sm:w-1/2 ${
                isTokenImgVisible && "animate-slideInLeftBasic"
              }`}
            >
              <Image
                src={TokenDistribution}
                alt="tokenomic"
                className="rounded-xl sm:h-[50vw] 2xl:h-[35vw]"
              />
            </div>
            <div
              className={`w-full sm:w-[47.5%] mt-5 sm:mt-0 ${
                isTokenImgVisible && "animate-fadeInBase"
              }`}
            >
              <h1 className="hidden sm:block text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-6 animate-pulseBasic">
                <span className="text-secondary sm:ml-2">Tokenomic</span>
              </h1>
              <List className="text-base lg:text-2xl xl:text-3xl font-semibold xs:px-2 sm:px-0">
                <ListItem className="text-lg lg:text-3xl xl:text-4xl font-bold">
                  Total Supply : 1,000,000,000 $LOFI
                </ListItem>
                <ListItem className="lg:mt-4">
                  ⦿ Liquidty 800,000,000(80%)
                </ListItem>
                <ListItem>⦿ Burn 100,000,000 (10%)</ListItem>
                <ListItem>⦿ Staking Farming 50,000,000 (5%)</ListItem>
                <ListItem>⦿ Cex Listing50,000,000 (5%)</ListItem>
              </List>
            </div>
            {/* <div className="w-1/2 lg:w-full">
            <div className="w-full text-center lg:my-10">
              <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold">
                Name
              </div>
              <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-1 lg:mt-3">
                $LOFI
              </div>
            </div>
            <div className="w-full text-center mt-4 sm:mt-8 lg:mt-10">
              <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold">
                Buy/Sell Tax
              </div>
              <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-1 lg:mt-3">
                5%
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-full lg:mt-10">
            <div className="w-full text-center">
              <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold">
                Supply
              </div>
              <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-1 lg:mt-3">
                -
              </div>
            </div>
            <div className="w-full text-center mt-4 sm:mt-8 lg:mb-10">
              <div className="text-2xl sm:text-4xl lg:text-6xl font-extrabold">
                Network
              </div>
              <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-1 lg:mt-3">
                Ethereum
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
