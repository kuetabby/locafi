"use client";
import { useEffect, useState } from "react";
import { useIsMounted } from "./useIsMounted";

const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : "";

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const isMounted = useIsMounted();

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     console.log(window.location.hash, "hash changed");

  //     setHash(getHash());
  //   };

  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

  console.log(getHash(), "getHash()");

  return isMounted && hash ? hash : null;
};

export default useHash;
