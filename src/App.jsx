import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useScrollToTop from "./components/hooks/useScrollToTop";
import ExclusiveOffersModal from "./components/ExclusiveOffersModal";

const App = () => {
  useScrollToTop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsModalOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="relative min-h-screen">
      <Header />
      <Outlet />
      <Footer />

      <div
        onClick={() => setIsModalOpen(true)}
        className={`fixed bottom-[-120px] left-[-120px] m-4 z-50 rotate-[45deg] cursor-pointer bg-[#f57f29] w-[200px] h-[200px] text-center pt-[5px]
          transition-all duration-700 ease-in-out
          ${submitted ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"}`}
      >
        <span className="text-white font-Montserrat">Exclusive offers!</span>
      </div>

      <div className="fixed bottom-[-20px] right-0 m-4 z-50 cursor-pointer">
        <button className="bg-black text-white px-4 py-[3px] rounded-b-none rounded-lg font-Montserrat">
          Cookie Preferences
        </button>
      </div>

      <ExclusiveOffersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setSubmitted={setSubmitted}
      />
    </div>
  );
};

export default App;
