import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";

import Globe from "@/assets/globe.png";
import Internet from "@/assets/internet.png";
import Locked from "@/assets/locked.png";
import Handshake from "@/assets/handshake.png";

interface Props {}

export const WhyReason: React.FC<Props> = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsCardVisible(entry.isIntersecting);
    });

    observer.observe(cardRef.current as HTMLDivElement);
  }, []);

  return (
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
        <CardBody className="why-card-body">
          Loca.Fi isn't just another blockchain project; it's a trailblazer in
          innovation. With a steadfast commitment to decentralization, Loca.Fi
          redefines industry norms by providing secure, transparent, and
          efficient solutions that adapt to a rapidly evolving digital world.
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
        <CardBody className="why-card-body">
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
        <CardBody className="why-card-body">
          Trust is non-negotiable for Loca.Fi. Leveraging blockchain's immutable
          nature, Loca.Fi ensures robust security and unparalleled transparency.
          It's a platform built on reliability and accountability, empowering
          both individuals and businesses.
        </CardBody>
      </Card>

      <Card
        className={`why-card-wrapper  ${
          isCardVisible && "animate-slideInBottomBasic"
        }`}
      >
        <CardHeader className="why-card-header">
          <Image src={Handshake} alt="community" className="w-14 h-14 mr-3" />{" "}
          Community-Centric Philosophy
        </CardHeader>
        <CardBody className="why-card-body">
          At Loca.Fi, the community isn't a passive audience; it's a valued
          collaborator. Your voice matters. Loca.Fi actively seeks and values
          community input, fostering an environment of open dialogue, feedback,
          and shared decision-making.
        </CardBody>
      </Card>
    </div>
  );
};
