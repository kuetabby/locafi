export const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : "";
