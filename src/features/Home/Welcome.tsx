import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

// import Background3 from "@/assets/background-3.png";
import Background5 from "@/assets/background-5.jpeg";

import "./style.css";

interface Props {}

export const Welcome: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isWhitepaperVisible, setIsWhitepaperVisible] = useState(false);

  const router = useRouter();

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);
  const whitepaperRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWelcomeVisible(entry.isIntersecting);
    });

    observer.observe(welcomeRef.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisionVisible(entry.isIntersecting);
      // if (entry.isIntersecting) {
      //   router.push("/");
      // }
    });

    observer.observe(visionRef.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWhitepaperVisible(entry.isIntersecting);
    });

    observer.observe(whitepaperRef.current as HTMLButtonElement);
  }, []);

  return (
    <div className="welcome-wrapper py-16">
      <Image
        src={Background5}
        alt="background-5"
        //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
        className="welcome-background"
      />

      <div className="relative">
        <h1
          ref={welcomeRef}
          className={`welcome-title ${
            isWelcomeVisible && "animate-fadeInBase"
          }`}
        >
          Welcome to
          <span className="locafi-title ml-2">Loca.Fi</span>
        </h1>
        <div className="welcome-description">
          An innovative blockchain project at the forefront of revolutionizing
          industries through decentralized solutions. Locafi is committed to
          leveraging the power of blockchain technology to address various
          challenges and enhance efficiency, transparency, and security across
          diverse sectors
        </div>

        <video
          autoPlay={true}
          id="v0"
          loop
          preload="preload"
          className="welcome-video"
          muted
          style={{ filter: "grayscale(0.3)" }}
        >
          <source type="video/mp4" src="/welcome.mp4"></source>
        </video>

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
            Locafi aims to redefine traditional paradigms and drive positive
            change across industry
          </div>

          <div className="w-full text-center mt-10">
            <Button
              ref={whitepaperRef}
              className={`whitepaper-btn ${
                isWhitepaperVisible && "animate-lightSpeedInLeftBase"
              }`}
            >
              Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
