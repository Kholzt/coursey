import React from "react";
import Navbar from "../components/frontend/Navbar";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;
