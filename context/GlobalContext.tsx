"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context with a proper type for the value
interface GlobalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Initialize the context with default values
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

// Global provider component
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
