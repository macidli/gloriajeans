import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoffeeBeans from "./CoffeeBeans";

function LocationCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh(); // Refresh burada vacibdir
  }, []);

  return (
    <div>
      <div className="relative flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] lg:w-[60%]">
          <div
            className="h-[550px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.gloriajeans.com/cdn/shop/files/GJC031123_3290.png?v=1698265942')",
            }}
          ></div>
        </div>

        <div className="relative w-full md:w-[50%] lg:w-[40%] bg-[#77c0b7] px-[30px] py-[30px] flex flex-col justify-center items-start">
          <div className="max-w-[500px]">
            <h1
              className="pb-[20px] text-white font-[800] text-[1.6em] md:text-[1.8em] font-Montserrat"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              GREAT COFFEE HAS BEEN OUR DRIVING PASSION FOR FORTY FIVE YEARS.
            </h1>
          </div>

          <hr className="text-white w-[45px] border" />

          <p
            className="py-[40px] text-[#fff] font-Montserrat"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            We are dedicated to handcrafting our very best just for you. Visit
            us at one of our Flavor Famous locations today.
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="w-[180px] lg:w-[215px] h-[50px] text-[#77c0b7] bg-white border-2 border-white uppercase font-bold flex justify-center items-center cursor-pointer 
              hover:text-white hover:bg-[#77c0b7] 
              transition-colors duration-500 ease-in-out"
          >
            Find my store
          </div>

          <div className="hidden md:block bottom-[5px] absolute right-[400px] nine:right-[450px] lg:right-[500px]">
            <CoffeeBeans
              src="https://www.gloriajeans.com/cdn/shop/t/42/assets/middle-coffee-svg.svg?v=27457775078015592091692876154"
              className="w-[100px]"
              alt="coffeepiece"
              speed={170}
              range={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
