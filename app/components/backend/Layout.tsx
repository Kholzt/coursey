import React, { Suspense } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Loading from "../Loading";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Navbar />
          {children}
        </main>
      </div>
    </Suspense>
  );
};

export default Layout;
