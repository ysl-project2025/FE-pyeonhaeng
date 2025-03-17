import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode; // children을 선택적(?)으로 변경
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <header>
      <Header />
      <main>{children || ""}</main>
      <Footer />
    </header>
  );
};

export default Layout;
