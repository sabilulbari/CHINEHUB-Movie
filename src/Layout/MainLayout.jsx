import Navbar from "../components/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const hasVisitedCount = parseInt(sessionStorage.getItem("visitCount") || "0", 10);

    let delay = 0;

    if (hasVisitedCount === 0) {
      delay = 3000;
    } else if (hasVisitedCount === 1) {
      delay = 1000;
    } else {
      delay = 0;
    }

    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        sessionStorage.setItem("visitCount", (hasVisitedCount + 1).toString());
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsInitialLoading(false);
      sessionStorage.setItem("visitCount", (hasVisitedCount + 1).toString());
    }
  }, []);

  if (isInitialLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B132B]">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
