import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { About } from "./About";

// import Background3 from "@/assets/background-3.png";
import Background5 from "@/assets/background-5.png";

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
    <div className="welcome-wrapper">
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
            isWelcomeVisible && "animate-fadeInLame"
          }`}
        >
          Welcome to
          <span className="locafi-title ml-2">TrenchAI</span>
        </h1>
        <div className="welcome-description">
          A trailblazing AI-powered platform, Trench AI is revolutionizing
          content creation through innovative multimedia solutions. By
          harnessing state-of-the-art AI technology, Trench AI empowers users
          with tools that enhance creativity, accessibility, and engagement
          across various formats.
          {/* A pioneering Layer 2 blockchain initiative, Loca.Fi is propelling
          industry transformation through decentralized solutions. Leveraging
          advanced Layer 2 technology, Loca.Fi enhances scalability, efficiency,
          transparency, and security for users. */}
          {/* As a leader in Layer 2
          advancements, Loca.Fi is dedicated to pioneering technological
          innovation and ensuring data confidentiality. */}
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
