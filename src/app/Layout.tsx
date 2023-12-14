import React from "react";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        {/* Header */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 flex">
          {/* Content */}
          {children}
        </main>

        {/* Footer */}
      </div>
    </div>
  );
};

export default Layout;
