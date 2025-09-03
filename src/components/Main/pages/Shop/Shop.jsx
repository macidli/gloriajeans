import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useTitle from "../../../hooks/useTitle";
import CoffeeBeans from "../Home/CoffeeBeans";
import CoffeeDetails from "./CoffeeDetails";
import CoffeeWorldMap from "./CoffeeWorldMap";
import DevidedParts from "./DevidedParts";
import Feedbacks from "./Feedbacks";
import PopularProducts from "./PopularProducts";

function Shop() {
  useTitle("Shop");

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div
        className="bg-center bg-cover relative"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent),
            url('https://www.gloriajeans.com/cdn/shop/files/shop-banner.png?v=1652188860')
          `,
        }}
      >
        <div className="max-w-[1276px] mx-auto min-h-[250px] h-[250px] md:h-[280px] relative">
          <div 
            className="max-w-[500px] flex h-full justify-center flex-col text-white pl-[20px] md:pl-[50px] relative z-10"
            data-aos="fade-down" 
          >
            <div>
              <h1 className="text-[1.6em] md:text-[1.9em] lg:text-[2.1em] font-bold pb-[5px] font-Montserrat">
                Shop
              </h1>
              <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[20px]" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-[-50px] right-[50px]">
          <CoffeeBeans
            src="https://www.gloriajeans.com/cdn/shop/t/42/assets/coffe-right-svg.svg?v=43759108114760129431692876101"
            className="w-[70px]"
            alt="coffeepiece"
            speed={170}
            range={15}
          />
        </div>
      </div>
      <PopularProducts />
      <DevidedParts />
      <CoffeeWorldMap />
      <CoffeeDetails />
      <Feedbacks />
    </>
  );
}

export default Shop;
