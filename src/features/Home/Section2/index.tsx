import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { WhyReason } from "./WhyReason";
import { FindUs } from "./FindUs";

import MoonNebula from "@/assets/moon-purple.png";
// import MoonNebula from "@/assets/moon-nebula.png";
// import Moon from "@/assets/moon.png";
// import Rocket from "@/assets/rocket.png";
import Rocket from "@/assets/rocket-3d.png";

import "../style.css";

interface Props {}

const Section2: React.FC<Props> = () => {
  const [isWhyVisible, setIsWhyVisible] = useState(false);

  const whyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWhyVisible(entry.isIntersecting);
    });

    observer.observe(whyRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="w-full h-full relative z-[10] py-8 px-4 text-white">
      <div id="why" className="h-20 sm:h-24" />
      <div ref={whyRef} className="w-full h-full">
        <Image
          src={MoonNebula}
          alt="moon"
          //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
          className="moon-background"
        />

        <div className="relative">
          <div className="w-full mx-auto flex items-center justify-center px-0 sm:px-10 md:px-20">
            <Image
              src={Rocket}
              alt="rocket"
              className={`w-14 sm:w-20 md:w-28 h-14 sm:h-20 md:h-28 ${
                isWhyVisible && "animate-bounceSlow"
              }`}
            />
            <h1 className="text-center text-3xl xs:text-5xl sm:text-6xl font-extrabold ml-2 sm:ml-4">
              Why <span className="locafi-title ml-2">Loca.Fi ?</span>
            </h1>
          </div>
          {/* <div className="w-full sm:w-4/5 xl:w-2/3 text-lg xs:text-xl sm:text-2xl text-center font-bold mx-auto mt-3">
            Loca.Fi isn't just a blockchain project: it's a beacon of change in
            an evolving digital landscape. Here's why it stands out
          </div> */}
        </div>

        <WhyReason />
        <FindUs />
      </div>
    </div>
  );
};

export default Section2;
