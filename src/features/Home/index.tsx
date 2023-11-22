"use client";

import { Welcome } from "./Welcome";
import { Why } from "./Why";
import { Tokenomic } from "./Tokenomic";

import "./style.css";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="homepage-container">
      <Welcome />
      <Why />
      <Tokenomic />
    </div>
  );
};

export default Home;
