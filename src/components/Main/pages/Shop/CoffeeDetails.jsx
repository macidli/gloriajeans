import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import StaticDetail from "./StaticDetail";

function CoffeeDetails() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
   <>
    <main>
      <div className="py-[45px] px-4 md:px-8">
        <h1
          className="text-[1.6em] md:text-[1.8em] lg:text-[2.1em] xl:text-[2.3em] text-[#f57f29] font-Montserrat font-bold text-center leading-snug"
          data-aos="fade-up"
        >
          #1 recommended blend for coffee on the go
        </h1>
      
        <StaticDetail />
      </div>
    </main>
   </>
  );
}

export default CoffeeDetails;
