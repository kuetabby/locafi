import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { About } from "./About";

// import Background3 from "@/assets/background-3.png";
import Background5 from "@/assets/background-5.jpeg";

import "../style.css";

interface Props {}

const Section1: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWelcomeVisible(entry.isIntersecting);
    });

    observer.observe(welcomeRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="welcome-wrapper py-16">
      <div id="welcome" className="h-20" />
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

        <About />
      </div>
    </div>
  );
};

export default Section1;
