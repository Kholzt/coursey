import React from "react";
import { GlobalProvider } from "../context/GlobalContext";
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default Providers;
