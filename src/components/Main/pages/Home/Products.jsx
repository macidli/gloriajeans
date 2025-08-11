import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    fetch("../../../../../public/Data/ProductsData.json")  // JSON faylın public qovluğundadırsa bu yol düzgündür
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("Products data yüklənmədi:", err));
  }, []);

  if (productsData.length === 0) {
    return <div>Yüklənir...</div>;
  }

  return (
    <section className="bg-white flex justify-center xl:bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/orange-cup-svg.svg?v=136309249489828729971692876171')] bg-[length:400px_auto] bg-no-repeat bg-end bg-right">
      <div className="max-w-[1300px] flex flex-col justify-center items-center py-[60px] w-full ">
        <div
          className="flex flex-col items-center justify-center gap-1"
          data-aos="fade-up"
        >
          <h2 className="text-[#f57f29] font-[800] text-[1.5em] md:text-[2em]">
            SIGNATURE FLAVORS
          </h2>
          <p className="text-[#4f4f4f] text-[1.1em] md:text-[1.2em] font-Montserrat">
            Available in-store & online
          </p>
        </div>

        <div className="py-[50px] w-full px-[30px] sm:px-[20px] relative">
          <Swiper
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.slug}>
                <div className="w-full max-w-[395px] flex flex-col items-center justify-center mx-auto group relative">
                  <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out lg:group-hover:scale-95"
                      src={product.image}
                      alt={product.title}
                    />

                    <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 opacity-0 translate-y-4 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-in-out w-[165px] h-[40px] text-[.9em] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#fff] hover:bg-[#f57f29]">
                      Add to cart
                    </div>
                  </div>

                  <div className="flex flex-col lg:max-w-[385px] items-center justify-center bg-[#d3d2d295] h-[290px] lg:h-[190px] px-[15px]">
                    <h3 className="text-[1em] md:text-[1.1em] lg:text-[1.3em] font-Montserrat font-[800] py-[5px] text-center">
                      {product.title}
                    </h3>
                    <p className="text-[#4f4f4f] text-[.9em] pb-[45px] text-center">
                      {product.description.length > 50
                        ? product.description.slice(0, 49) + "..."
                        : product.description}
                    </p>
                    <p className="font-bold font-Montserrat text-[1.1em]">
                      {product.price.toFixed(2)}
                    </p>

                    <div className="w-[165px] lg:hidden h-[40px] mt-[20px] text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400">
                      Add to cart
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-[205px] h-[50px] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center border-[2px] border-[#f57f29] cursor-pointer hover:text-[#fff] hover:bg-[#f57f29] transition duration-400">
          Shop all
        </div>
      </div>
    </section>
  );
}

export default Products;
