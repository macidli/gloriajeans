import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function CoffeeWorldMap() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full">

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://www.gloriajeans.com/cdn/shop/files/ShopLandingImage_1029xx629_960x.jpg?v=1656575293"
          alt="Coffee Map"
          className="w-full h-auto object-cover"
        />
      </div>


      <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#231f20] items-start px-4 py-6 md:px-6 md:py-0">
        <h1
          className="font-Montserrat text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] text-white lg:text-[2.2rem] xl:text-[2.4rem] font-[800] capitalize "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We Source Premium Raw Coffee Beans From Over{" "}
          <span
            className="text-[#f57f29]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            20 Countries
          </span>
        </h1>
        <p
          className="mt-4 text-[#231f20] text-[1rem] sm:text-[1.1rem]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Discover the finest coffee beans sourced from around the world to
          ensure premium taste and quality in every cup.
        </p>
      </div>
    </div>
  );
}

export default CoffeeWorldMap;
