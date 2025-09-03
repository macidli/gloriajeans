import Aos from "aos";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";  
import "swiper/css";
import "swiper/css/navigation"; 
import { Link } from "react-router-dom";
import CustomerReviews from "./CustomerReviews";
import { useBasket } from "../Basket/BasketContext";
import CoffeeAPI from "../Services/CoffeeAPI";
import DetailsSkeleton from "./Sceletons/Details2Sceleton";

function Details2() {
  const [activeTab, setActiveTab] = useState("nutrition");
  const [productsData, setProductsData] = useState([]);
  const { addToBasket } = useBasket(); 
  const coffeeAPI = new CoffeeAPI();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });


    coffeeAPI.getPopularProducts()
      .then(popularProducts => setProductsData(popularProducts))
      .catch(err => console.error("Popular products yüklenmədi:", err));
  }, []);

if (productsData.length === 0) {
  return <DetailsSkeleton itemsCount={3} />;
}

  const handleAddToBasket = (product) => {
    const quantity = 1;
    const selected = product.sizes?.[0]?.label + " / " + product.sizes?.[0]?.types?.[0] || "";
    const selectedOption = "onetime";
    const totalPrice = product.price * quantity;

    addToBasket({ ...product, selected, selectedOption, quantity, totalPrice });
  };

  return (
    <>
  
      <div className="px-[20px] md:px-[40px] overflow-x-auto">
        <div className="flex border-y border-[#8e8e8e6d] items-center font-Montserrat whitespace-nowrap">
          <div
            onClick={() => setActiveTab("nutrition")}
            className={`cursor-pointer px-[20px] md:px-[30px] py-[15px] relative transition-colors duration-500 ${
              activeTab === "nutrition" ? "text-[#f57f29]" : "text-gray-700"
            }`}
          >
            <p className="transition-colors duration-500 text-sm md:text-base lg:text-lg">
              Nutrition
            </p>
            {activeTab === "nutrition" && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f57f29] transition-all duration-500" />
            )}
          </div>

          <div className="self-stretch w-[1px] bg-[#8e8e8e6d]" />

          <div
            onClick={() => setActiveTab("shipping")}
            className={`cursor-pointer px-[20px] md:px-[30px] py-[15px] relative transition-colors duration-500 ${
              activeTab === "shipping" ? "text-[#f57f29]" : "text-gray-700"
            }`}
          >
            <p className="transition-colors duration-500 text-sm md:text-base lg:text-lg">
              Shipping & Delivery
            </p>
            {activeTab === "shipping" && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f57f29] transition-all duration-500" />
            )}
          </div>
        </div>
      </div>

      <div>
        {activeTab === "nutrition" && (
          <div className="py-[30px] md:py-[50px] px-[20px]">
            <div className="flex gap-[10px] flex-col-reverse md:flex-row py-0 pl-0 lg:pl-[10px] xl:pl-[70px]">
              <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-black">
                <div>
                  <h1 className="pt-[15px] md:pt-0 pb-[10px] md:pb-[5px] capitalize text-[1.5em] lg:text-[2em] font-[800] font-Montserrat">
                    Nutrition
                  </h1>
                  <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[30px]" />
                </div>
                <div className="pr-[20px] text-[.85em] md:text-[.95em]">
                  <p className="pb-[30px] md:pb-[55px] font-Montserrat text-[#4f4f4f]">
                    Ingredients: 100% Arabica coffee beans. Gloria Jean’s
                    flavored coffees contain natural and artificial flavors.
                    Does not contain nuts or dairy products.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-[50%] px-[10px] md:px-0 flex justify-center items-center">
                <img
                  src="https://www.gloriajeans.com/cdn/shop/files/home-banner-1_1200x.jpg?v=1651850159"
                  alt="Nutrition"
                  className="max-w-full max-h-[400px] md:h-[450px]"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="py-[30px] md:py-[50px] px-[20px]">
            <div className="flex gap-[10px] flex-col-reverse md:flex-row py-0 pl-0 lg:pl-[10px] xl:pl-[70px]">
              <div className="w-full md:w-[50%] px-[10px] md:px-0 flex justify-center items-center">
                <img
                  src="https://www.gloriajeans.com/cdn/shop/files/ShippingTab_ProductPage_1_1200x.jpg?v=1660064799"
                  alt="Shipping & Delivery"
                  className="max-w-full max-h-[400px] md:h-[450px]"
                />
              </div>

              <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-black md:pl-[30px]">
                <div>
                  <h1 className="pt-[15px] md:pt-0 pb-[10px] md:pb-[5px] capitalize text-[1.5em] lg:text-[2em] font-[800] font-Montserrat">
                    Shipping & Delivery
                  </h1>
                  <hr className="w-[40px] border-t-2 border-[#f57f29] pb-[30px]" />
                </div>
                <div className="pr-[20px] text-[.85em] md:text-[.95em]">
                  <p className="pb-[30px] md:pb-[55px] font-Montserrat text-[#4f4f4f]">
                    Tracked UPS Standard and UPS Ground shipping options are
                    available for all Gloria Jean's Coffees orders. To calculate
                    the shipping cost for your order, please proceed to the
                    checkout. Free shipping applies for orders over $70.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

   
      <section className="bg-white flex justify-center xl:bg-[url('https://www.gloriajeans.com/cdn/shop/t/42/assets/orange-cup-svg.svg?v=136309249489828729971692876171')] bg-[length:400px_auto] bg-no-repeat bg-end bg-right">
        <div className="max-w-[1300px] flex flex-col justify-center items-center py-[60px] w-full">
          <div
            className="flex flex-col items-center justify-center gap-1"
            data-aos="fade-up"
          >
            <h2 className="text-[#000] font-[800] text-[1.5em] md:text-[2em]">
              Flavored Whole Beans
            </h2>
          </div>

          <div className="py-[50px] w-full px-[30px] sm:px-[20px] relative">
            <Swiper
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              centeredSlides={true}
              breakpoints={{
                0: { slidesPerView: 1.5, centeredSlides: false },
                640: { slidesPerView: 2, centeredSlides: false },
                768: { slidesPerView: 3, centeredSlides: false },
              }}
            >
              {productsData.map((product) => (
                <SwiperSlide key={product.slug}>
                  <div className="w-full h-full">
                    <div className="w-full max-w-[395px] flex flex-col items-center justify-center mx-auto group relative">
                      <Link
                        to={`/details/${product.slug}`}
                        className="w-full h-full"
                      >
                        <div className="w-full border-[3px] border-[#fff] shadow aspect-square flex items-center justify-center relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out lg:group-hover:scale-95"
                          />

                          <div
                            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 opacity-0 translate-y-4 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto transition-all duration-500 ease-in-out w-[165px] h-[40px] text-[.9em] text-[#f57f29] bg-[#fff] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#fff] hover:bg-[#f57f29]"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToBasket(product);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </Link>

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
                          $ {product.price.toFixed(2)}
                        </p>

                        <div
                          onClick={() => handleAddToBasket(product)}
                          className="w-[165px] lg:hidden h-[40px] mt-[20px] text-[.9em] text-[#fff] bg-[#f57f29] uppercase font-bold flex justify-center items-center cursor-pointer hover:text-[#f57f29] hover:bg-[#fff] transition duration-400"
                        >
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <CustomerReviews />
    </>
  );
}

export default Details2;
