import Image from "next/image";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import {
  // CheckCircleOutlined,
  LockOutlined,
  RocketOutlined,
} from "@ant-design/icons";

import { Tokenomic } from "./Tokenomic";

import Background4 from "@/assets/background-4.png";

interface Props {}

const Section3: React.FC<Props> = () => {
  return (
    <div className="w-full h-full relative z-[10] py-8 px-4 text-white">
      <Image
        src={Background4}
        alt="background-4"
        //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
        className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat brightness-[0.65]"
      />

      <div className="h-20 sm:h-16 xl:h-20" />
      <Tokenomic />

      <div className="h-28 xl:h-32" />
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <div className="relative flex lg:px-2 xl:px-16 2xl:px-0">
          <div className="w-full sm:w-3/4 lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-extrabold feature-inactive">
              JOURNEY THROUGH THE LOCAFI ECOSYSTEM, THE CORE OF COMMUNITY
            </h1>

            <List className="mt-2 sm:mt-4 text-2xl font-semibold">
              <ListItem className="feature-active">
                <ListIcon
                  // as={RocketOutlined}
                  as={LockOutlined}
                  className="text-secondary text-2xl font-semibold"
                />
                Testnet
              </ListItem>
              <ListItem className="feature-inactive">
                <ListIcon
                  as={LockOutlined}
                  className="text-secondary text-2xl font-semibold"
                />
                Staking dApp
              </ListItem>
              <ListItem className="feature-inactive">
                <ListIcon
                  as={LockOutlined}
                  className="text-secondary text-2xl font-semibold"
                />
                Scanner dApp
              </ListItem>
              <ListItem className="feature-inactive">
                <ListIcon
                  as={LockOutlined}
                  className="text-secondary text-2xl font-semibold"
                />
                Mainnet
              </ListItem>
              <ListItem className="feature-inactive">
                <ListIcon
                  as={LockOutlined}
                  className="text-secondary text-2xl font-semibold"
                />
                Bridge
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
