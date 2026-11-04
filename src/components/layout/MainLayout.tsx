import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../common/WhatsAppButton";

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      id="app-root"
      className="min-h-screen flex flex-col bg-[#FFF9F6] text-[#111321] relative overflow-x-hidden selection:bg-[#FF087F]/20 selection:text-[#111321]"
    >
      <Header />
      <main className="flex-1 relative z-10 bg-transparent">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
