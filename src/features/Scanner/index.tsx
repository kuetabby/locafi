"use client";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DownOutlined } from "@ant-design/icons";
import { isAddress } from "ethers/lib/utils";

import { Information } from "./Information";
import { ScanLoader } from "@/components/Loader/Scan";

import useDebounce from "@/hooks/useDebounce";
import { useIsMounted } from "@/hooks/useIsMounted";

import Background3 from "@/assets/background-3.png";
import EthLogo from "@/assets/ethereum-logo.png";
import ArbitrumLogo from "@/assets/arbitrum-logo.png";
import BscLogo from "@/assets/bnb-logo.webp";
import BaseLogo from "@/assets/base-logo.png";

import { GoPlusTokenResponse, SupportedChainId } from "./models";

import "./style.css";

interface Props {}

export const ChainInfo = {
  [SupportedChainId.ETH]: {
    label: "Ethereum",
    code: "ETH",
    logo: EthLogo,
    explorer: "https://etherscan.io",
    dexs: "ethereum",
    dexv: "eth",
    dext: "ether",
  },
  [SupportedChainId.ARBITRUM]: {
    label: "Arbitrum",
    code: "ARB",
    logo: ArbitrumLogo,
    explorer: "https://arbiscan.io",
    dexs: "arbitrum",
    dexv: "arbitrum",
    dext: "arbitrum",
  },
  [SupportedChainId.BASE]: {
    label: "Base",
    code: "BASE",
    logo: BaseLogo,
    explorer: "https://basescan.org",
    dexs: "base",
    dexv: "",
    dext: "base",
  },
  [SupportedChainId.BSC]: {
    label: "Binance Smart Chain",
    code: "BSC",
    logo: BscLogo,
    explorer: "https://bscscan.io",
    dexs: "bsc",
    dexv: "bsc",
    dext: "bnb",
  },
};

const Scanner: React.FC<Props> = () => {
  const [chainId, setChainId] = useState(SupportedChainId.ETH);
  const [contractAddress, setContractAddress] = useState("");

  const { isOpen: isScan, onOpen: onScan, onClose: offScan } = useDisclosure();
  const isMounted = useIsMounted();
  const toast = useToast();

  const debounceContractAddress = useDebounce(contractAddress, 250);

  const isValidContractAddress = isAddress(debounceContractAddress);
  const isDisabled = !chainId || !contractAddress || !isValidContractAddress;

  useEffect(() => {
    if (debounceContractAddress && !isValidContractAddress) {
      offScan();
    }
  }, [debounceContractAddress]);

  const {
    data: scanTokenResponse,
    // isLoading: isScanTokenLoading,
    isFetching: isScanTokenLoading,
    refetch: scanRefetch,
  } = useQuery<GoPlusTokenResponse, {}>(
    [chainId, isScan, contractAddress],
    async () => {
      const request = await axios.get(`/api/scan`, {
        params: {
          chainId,
          contractAddress,
        },
      });
      const response = await request.data;
      const isEmpty = Object.keys(response?.result).length === 0;

      if (!isEmpty) {
        return Object.values(response?.result)[0];
      }

      return response?.result;
    },
    {
      onError: (error: any) => {
        if (error.response) {
          toast({
            title:
              error.response?.data?.description ??
              `Something went wrong! Please try Again`,
            status: "error",
          });

          return error.response?.data?.description;
        }
        toast({
          title: error.message ?? `Something went wrong! Please try Again`,
          status: "error",
        });

        return error.message;
      },
      enabled: !!chainId && !!isValidContractAddress && isScan,
      refetchOnWindowFocus: false,
    }
  );

  const onChangeChainId = (id: SupportedChainId) => {
    setChainId(id);
  };

  const onChangeContract = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContractAddress(value);
  };

  const onResetState = () => {
    offScan();
    setChainId(SupportedChainId.ETH);
    setContractAddress("");
  };

  if (!isMounted) {
    return (
      <div className="scannerpage-container">
        <Image
          src={Background3}
          alt="background-3"
          //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
          className="scanner-background"
        />
      </div>
    );
  }

  return (
    <div className="scannerpage-container">
      <Image
        src={Background3}
        alt="background-3"
        //   className="w-full h-[50vw] absolute top-0 left-0 bg-cover bg-center lg:bg-top bg-no-repeat brightness-[0.65]"
        className="scanner-background"
      />
      {/* <div className="h-6" /> */}
      <div className="h-6 relative" />
      {isScanTokenLoading && <ScanLoader />}
      {!isScanTokenLoading && !scanTokenResponse && (
        <div className="w-full md:w-11/12 lg:w-[85%] mx-auto relative">
          <div className="w-full">
            <div className="text-xl sm:text-3xl !font-extrabold text-white">
              Loca.Fi Scanner
            </div>
            <div className="text-lg sm:text-xl text-white mt-4 mb-1">
              You're one step closer to a safer portfolio.
            </div>
            <div className="text-lg sm:text-xl text-white">
              Let's get started!
            </div>
            <div className="w-full h-full flex flex-wrap justify-between">
              <Card className="w-full h-full sm:w-[70%] md:w-2/3 lg:w-1/2 2xl:w-2/5 bg-dark-secondary rounded-lg mt-4">
                <CardBody className="pb-0">
                  {/* <div className="text-lg sm:text-xl text-white">Select One:</div>
                <div className="w-44 flex flex-wrap justify-between mt-2 mb-6">
                  <Button
                    colorScheme={
                      category === SupportedCategory.Token
                        ? `purple`
                        : `whiteAlpha`
                    }
                    className="h-8"
                    onClick={() => onChangeCategory(SupportedCategory.Token)}
                  >
                    Token
                  </Button>
                  <Button
                    colorScheme={
                      category === SupportedCategory.NFT
                        ? `purple`
                        : `whiteAlpha`
                    }
                    className="h-8"
                    onClick={() => onChangeCategory(SupportedCategory.NFT)}
                  >
                    NFT
                  </Button>
                </div> */}
                  <div className="w-full flex flex-wrap justify-between">
                    <div className="w-full sm:w-[30%] flex flex-col">
                      <div className="text-lg text-white">Select Chain :</div>
                      <Menu>
                        <MenuButton
                          as={Button}
                          rightIcon={<DownOutlined />}
                          transition="all 0.2s"
                          className="w-max sm:mr-auto mt-2 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent border border-white text-white"
                        >
                          {chainId ? (
                            <Image
                              src={
                                ChainInfo[chainId as keyof typeof ChainInfo]
                                  .logo
                              }
                              alt="chain-logo"
                              className="w-6 h-6"
                            />
                          ) : (
                            "Select"
                          )}
                        </MenuButton>
                        <MenuList className="!min-w-max !bg-dark-secondary">
                          <MenuItem
                            className="w-fit bg-inherit text-white"
                            onClick={() =>
                              onChangeChainId(SupportedChainId.ETH)
                            }
                          >
                            <Box display="flex" alignItems="center">
                              <Image
                                src={EthLogo}
                                alt="eth-logo"
                                className="w-6 h-6 mr-2"
                              />
                              <span>ETH</span>
                            </Box>
                          </MenuItem>
                          <MenuItem
                            className="w-fit bg-inherit text-white"
                            onClick={() =>
                              onChangeChainId(SupportedChainId.BSC)
                            }
                          >
                            <Box display="flex" alignItems="center">
                              <Image
                                src={BscLogo}
                                alt="bsc-logo"
                                className="w-6 h-6 mr-2"
                              />
                              <span>BSC</span>
                            </Box>
                          </MenuItem>
                          <MenuItem
                            className="w-fit bg-inherit text-white"
                            onClick={() =>
                              onChangeChainId(SupportedChainId.ARBITRUM)
                            }
                          >
                            <Box display="flex" alignItems="center">
                              <Image
                                src={ArbitrumLogo}
                                alt="arb-logo"
                                className="w-6 h-6 mr-2"
                              />
                              <span>ARBITRUM</span>
                            </Box>
                          </MenuItem>
                          <MenuItem
                            className="w-fit bg-inherit text-white"
                            onClick={() =>
                              onChangeChainId(SupportedChainId.BASE)
                            }
                          >
                            <Box display="flex" alignItems="center">
                              <Image
                                src={BaseLogo}
                                alt="base-logo"
                                className="w-6 h-6 mr-2"
                              />
                              <span>BASE</span>
                            </Box>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                    <div className="w-full sm:w-2/3 flex flex-col mt-3 sm:mt-0">
                      <div className="text-lg text-white">
                        Enter the Contract Address :
                      </div>
                      <Input
                        value={contractAddress}
                        onChange={onChangeContract}
                        className="w-full sm:w-full my-2 py-1 border active:border-secondary focus:border-secondary border-white"
                        color={"white"}
                        isInvalid={
                          !!debounceContractAddress && !isValidContractAddress
                        }
                        placeholder="Contract Address"
                        _placeholder={{
                          textColor: "white",
                        }}
                      />
                      {!!debounceContractAddress && !isValidContractAddress && (
                        <div className="text-center text-red-500 font-semibold">
                          Enter a valid Address
                        </div>
                      )}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="w-full flex-wrap">
                  <div className="w-full sm:w-60 flex flex-wrap justify-evenly sm:justify-between mx-auto sm:mx-0">
                    <Button
                      className={`w-5/12 sm:w-[45%] h-8 text-white bg-primary hover:bg-light-purple active:bg-light-purple focus:bg-light-purple disabled:bg-light-purple ${
                        isDisabled && "pointer-events-none"
                      }`}
                      onClick={onScan}
                      isDisabled={isDisabled}
                      isLoading={isScanTokenLoading}
                    >
                      Scan
                    </Button>
                    <Button
                      colorScheme="whiteAlpha"
                      className="w-5/12 sm:w-[45%] h-8"
                      onClick={onResetState}
                      isDisabled={isDisabled}
                      isLoading={isScanTokenLoading}
                    >
                      Clear
                    </Button>
                  </div>
                  <div className="mt-4 w-full sm:w-3/4 text-white font-semibold">
                    Note: These tools are not intended as financial advice.
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
      {!isScanTokenLoading && scanTokenResponse && (
        <Information
          scanResponse={scanTokenResponse}
          chainId={chainId}
          contractAddress={contractAddress}
          scanRefetch={scanRefetch}
          onReset={onResetState}
        />
      )}
    </div>
  );
};

export default Scanner;
