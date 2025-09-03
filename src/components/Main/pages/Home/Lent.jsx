import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CoffeeBeans from "./CoffeeBeans";

function Lent() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative w-full h-[200px] bg-black flex px-[30px] items-center justify-center flex-col nine:flex-row gap-[10px] lg:flex-col prexl:flex-row lg:gap-[15px] xl:gap-[30px]">
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-white font-[800] font-Montserrat text-center text-[1.3em] sm:text-[1.6em] lg:text-[2em] nine:text-[2em]"
      >
        DISCOVER YOUR #FLAVORFAMOUS FAVORITES
      </h1>
    <a href="https://orders.gloriajeanscoffees.com/">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="w-[180px] lg:w-[215px] h-[50px] text-[#000] bg-[#fff] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#fff] hover:bg-[#f57f29] transition duration-400"
      >
         TAKE THE QUIZ
      </div>
    </a>
      <div
        className="hidden md:block absolute bottom-[-70px] right-[50px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <CoffeeBeans
          src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffe-right-svg.svg?v=43759108114760129431692876101"
          className="w-[80px]"
          alt="coffeepiece"
          speed={170}
          range={15}
        />
      </div>
    </div>
  );
}

export default Lent;
