import React from "react";
import { GlobalProvider } from "../context/GlobalContext";
import { ClerkProvider } from "@clerk/nextjs";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <GlobalProvider>{children}</GlobalProvider>
    </ClerkProvider>
  );
};

export default Providers;
