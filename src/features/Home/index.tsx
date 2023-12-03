"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./style.css";

interface Props {}

// const changeNowKey =
//   "e7dd253a844bb1b84d69a570911edf77c3952d1ccb6bc8acc743aea2e94df12c";

// const availableCurr =
//   "https://api.changenow.io/v2/exchange/currencies?active=&flow=standard&buy=&sell=";

const Home: React.FC<Props> = () => {
  // useQuery([], async () => {
  //   const request = await axios({
  //     method: "GET",
  //     maxBodyLength: Infinity,
  //     url: "https://api.changenow.io/v2/exchange/min-amount?fromCurrency=btc&toCurrency=usdt&fromNetwork=btc&toNetwork=eth&flow=standard",
  //     headers: {
  //       "x-api-key": changeNowKey,
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Headers":
  //         "Origin, x-api-key, x-requested-with, Content-Type, Accept, Authorization",
  //     },
  //   });
  //   const response = await request.data;
  //   console.log(response, "response");

  //   let myHeaders = new Headers();
  //   myHeaders.append("x-api-key", changeNowKey);
  //   myHeaders.append("Access-Control-Allow-Headers", "*");
  //   myHeaders.append(
  //     "Access-Control-Allow-Method",
  //     "GET, POST, PUT, PATCH, OPTIONS, DELETE"
  //   );

  //   const request = await fetch(
  //     "https://api.changenow.io/v2/exchange/min-amount?fromCurrency=btc&toCurrency=usdt&fromNetwork=btc&toNetwork=eth&flow=standard",
  //     {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     }
  //   );
  //   const response = await request.json();

  //   console.log(response, "res");

  //   return response;
  // });

  return (
    <div className="homepage-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
