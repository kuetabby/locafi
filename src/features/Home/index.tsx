"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./style.css";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="homepage-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
