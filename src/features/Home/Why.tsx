import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";

import MoonNebula from "@/assets/moon-purple.png";
// import MoonNebula from "@/assets/moon-nebula.png";
// import Moon from "@/assets/moon.png";
// import Rocket from "@/assets/rocket.png";
import Rocket from "@/assets/rocket-3d.png";
import Globe from "@/assets/globe.png";
import Internet from "@/assets/internet.png";
import Locked from "@/assets/locked.png";
import Handshake from "@/assets/handshake.png";

import "./style.css";

interface Props {}

export const Why: React.FC<Props> = () => {
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const router = useRouter();

  const whyRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsWhyVisible(entry.isIntersecting);
      // if (entry.isIntersecting) {
      //   router.push("#why");
      // }
    });

    observer.observe(whyRef.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsCardVisible(entry.isIntersecting);
    });

    observer.observe(cardRef.current as HTMLDivElement);
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
          <div className="w-full sm:w-4/5 xl:w-2/3 text-lg xs:text-xl sm:text-2xl text-center font-bold mx-auto mt-3">
            Loca.Fi isn't just a blockchain project: it's a beacon of change in
            an evolving digital landscape. Here's why it stands out
          </div>
        </div>
        <div ref={cardRef} className="why-card-container">
          <Card
            className={`why-card-wrapper ${
              isCardVisible && "animate-slideInTopBasic"
            }`}
          >
            <CardHeader className="why-card-header">
              <Image src={Internet} alt="internet" className="w-14 h-14 mr-3" />{" "}
              Trailblazing Innovation
            </CardHeader>
            <CardBody className="!pt-0 font-semibold">
              Loca.Fi isn't just another blockchain project; it's a trailblazer
              in innovation. With a steadfast commitment to decentralization,
              Loca.Fi redefines industry norms by providing secure, transparent,
              and efficient solutions that adapt to a rapidly evolving digital
              world.
            </CardBody>
          </Card>

          <Card
            className={`why-card-wrapper sm:!w-[47.5%] mt-2 mb-1 sm:my-6 ${
              isCardVisible && "animate-slideInLeftBasic"
            }`}
          >
            <CardHeader className="why-card-header">
              <Image src={Globe} alt="globe" className="w-14 h-14 mr-3" />
              Global Impact
            </CardHeader>
            <CardBody className="!pt-0 font-semibold">
              Loca.Fi isn't just transforming one sector; it's pioneering global
              change. By championing financial inclusion, sustainability, and
              responsibility, Loca.Fi's vision extends far beyond traditional
              boundaries, aiming to create a more interconnected, fair, and
              efficient world.
            </CardBody>
          </Card>

          <Card
            className={`why-card-wrapper sm:!w-[47.5%] mt-1 mb-2 sm:my-6 ${
              isCardVisible && "animate-slideInRightBasic"
            }`}
          >
            <CardHeader className="why-card-header">
              <Image src={Locked} alt="locked" className="w-14 h-14 mr-3" />{" "}
              Uncompromising Security & Transparency
            </CardHeader>
            <CardBody className="!pt-0 font-semibold">
              Trust is non-negotiable for Loca.Fi. Leveraging blockchain's
              immutable nature, Loca.Fi ensures robust security and unparalleled
              transparency. It's a platform built on reliability and
              accountability, empowering both individuals and businesses.
            </CardBody>
          </Card>

          <Card
            className={`why-card-wrapper  ${
              isCardVisible && "animate-slideInBottomBasic"
            }`}
          >
            <CardHeader className="why-card-header">
              <Image
                src={Handshake}
                alt="community"
                className="w-14 h-14 mr-3"
              />{" "}
              Community-Centric Philosophy
            </CardHeader>
            <CardBody className="!pt-0 font-semibold">
              At Loca.Fi, the community isn't a passive audience; it's a valued
              collaborator. Your voice matters. Loca.Fi actively seeks and
              values community input, fostering an environment of open dialogue,
              feedback, and shared decision-making.
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
